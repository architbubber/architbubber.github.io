//
// Smpl_LCD_TIMER0 : TIMER 0 set at .25 sec to shift & print LCD
//
#include <stdio.h>
#include "NUC1xx.h"
#include "Driver\DrvSYS.h"
#include "Driver\DrvGPIO.h"
#include "NUC1xx-LB_002\LCD_Driver.h"

char TEXT1[16] = "                ";
static uint8_t pos = 0;

//---------------------------------------------------------------------------------TIMER
void InitTIMER0(void)
{
	/* Step 1. Enable and Select Timer clock source */          
	SYSCLK->CLKSEL1.TMR0_S = 0;	//Select 12Mhz for Timer0 clock source 
    SYSCLK->APBCLK.TMR0_EN =1;	//Enable Timer0 clock source

	/* Step 2. Select Operation mode */	
	TIMER0->TCSR.MODE=1;		//Select periodic mode for operation mode

	/* Step 3. Select Time out period = (Period of timer clock input) * (8-bit Prescale + 1) * (24-bit TCMP)*/
	TIMER0->TCSR.PRESCALE=63;	// Set Prescale [0~255]
	TIMER0->TCMPR = 46875;		// Set TCMPR [0~16777215]
							             	// (1/12000000)*(63+1)* 46875 = 0.25 sec

	/* Step 4. Enable interrupt */
	TIMER0->TCSR.IE = 1;
	TIMER0->TISR.TIF = 1;		//Write 1 to clear for safty		
	NVIC_EnableIRQ(TMR0_IRQn);	//Enable Timer0 Interrupt

	/* Step 5. Enable Timer module */
	TIMER0->TCSR.CRST = 1;		//Reset up counter
	TIMER0->TCSR.CEN = 1;		//Enable Timer0

//  	TIMER0->TCSR.TDR_EN=1;		// Enable TDR function
}

void TMR0_IRQHandler(void) // Timer0 interrupt subroutine 
{
	if (pos<13) {
		sprintf(TEXT1+pos," M0");
		print_lcd(1, TEXT1);
	}
	else {
		sprintf(TEXT1+pos,"   ");
		print_lcd(1, TEXT1);
		pos=0;
	}
	TIMER0->TISR.TIF =1;
	pos++;
}

int main(void)
{
	UNLOCKREG();
	DrvSYS_Open(48000000); // set to 48MHz
	LOCKREG(); 

	Initial_panel(); 
	clr_all_panel();	
	print_lcd(0, "Smpl_LCD_TIMER");	  
	
	InitTIMER0();
	while(1) {
  }   	  	 	  		
}

