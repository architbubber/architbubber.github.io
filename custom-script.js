$(document).ready(function () {
  $('.toast').toast({animation: true});
    function isInViewport(element) {
    var boundingBox = element.getBoundingClientRect();
    return (
      boundingBox.top >= 0 &&
      boundingBox.left >= 0 &&
      boundingBox.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
 
  var projectData = [
    {
      name:'Indian Institute of Sciences(IISc)',
      imageSrc:'Images-webp/www.icwar.iisc.ac.in_.webp',
      link:'https://icwar.github.io/'
    },
    {
      name:'Dr. BramhaDutt Vishwakarma Portfolio',
      imageSrc:'Images/BramhaDuttPortfolio.png',
      link:'http://architbubber.github.io/BramhaDuttVishwakarma-Portfolio/'
    },
    {
      name:'College DataCenter (MSRIT)',
      imageSrc:'Images-webp/RITpic.webp',
      link:'https://msritcse.vercel.app/'
    },
    {
      name:'Camera Rental Website as Freelance',
      imageSrc:'Images-webp/lcaktion.webp',
      link:'https://lcaktion.herokuapp.com'
    },
    {
      name:'Real Time browser based tracking website',
      imageSrc:'Images-webp/TrackmeRide.webp',
      link:'https://trackmeride.herokuapp.com'
    },
    {
      name:'Arduino Flightcontroller integration with radio',
      imageSrc:'https://static.wixstatic.com/media/0272ea_795922b5c4864e14bfbb26ed99bc318c~mv2.jpg',
      link:''
    },
    {
      name:'Portfolio',
      imageSrc:'Images-webp/NewWebsite.webp',
      link:'https://architbubber.github.io'
    },
    {
      name:'Neopixel Led Code Generator',
      imageSrc:'Images-webp/Neopixels.webp',
      link:'https://architbubber.github.io/npcg.app'
    }
  ]
                          
  var preparedFlipCards = '';

  for(var i = 0;i<projectData.length;i++){
    preparedFlipCards+=`<div class="flip-card card my-works-card col-10 col-md-3 m-1">
    <div class="flip-card-inner">
      
      <div class="flip-card-front card-body" style="height: 100%;background: url('`+projectData[i].imageSrc+`');background-size:contain;background-position: center;background-repeat: no-repeat;"></div>
      
      <div class="flip-card-back backdrop-blur ">
      <a href ='`+projectData[i].link+`' class = "text-decoration-none" target="_blank">
      <div class="card-header text-center">
        `+projectData[i].name+` 
        </div><br/>Click to View</a>
      </div>
    </div>
  </div>
  `
  }

  document.getElementById('works').innerHTML = preparedFlipCards;
  // Example usage
  var selectedElement = $('.typing-text');

  // Check if the selected element is in the viewport
  if (isInViewport(selectedElement[0])) {
    console.log('The element is in the viewport.');
  } else {
    console.log('The element is not in the viewport.');
  }
  
  count = 0;
  $(window).on('resize scroll', function() {
      var i=0;
      if(isInViewport($('.typing-text')[0]) && count++ < 1){
          var text = 'I am a corporate employee 9-5, part-time freelancer and an avid programmer of Web and Arduino. I love to play football and have chat by tea ....'

          $('.typing-text').text('')
          var refreshIntervalId = setInterval(function() {
          
          if(i == text.length-1)
              clearInterval(refreshIntervalId);

          $('.typing-text').text($('.typing-text').text()+text[i++]);
      
      }, 30);
      return;
    }
  })

  if($('section#works').scrollTop()<10)
    $('.toast').toast('show');
  else
    $('.toast').toast('hide');

    $.fn.isInViewport = function() {

      var elementTop = $(this).offset().top;
    
      var elementBottom = elementTop + $(this).outerHeight() / 2;
    
      var viewportTop = $(window).scrollTop();
    
      var viewportHalf = viewportTop + $(window).height() / 2;
    
      return elementBottom > viewportTop && elementTop < viewportHalf;
    
    };
    console.log($('#works>div>div').position())
});
// if($('#works').scrollTop()<10)
//     $('.toast').toast('show');
//   else
//     $('.toast').toast('hide');


// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };
// $(document).ready(function () {
//     var  count = 0;
//     $(window).on('resize scroll', function() {
        
//         var i=0;
//         if(count++ < 1 && $('.typing-text').isInViewport()){
//             var text = $('.typing-text').text();

//             $('.typing-text').text('')
//             var refreshIntervalId = setInterval(function() {
            
//             if(i == text.length-1)
//                 clearInterval(refreshIntervalId);

//             $('.typing-text').text($('.typing-text').text()+text[i++]);
        
//         }, 30);}
// })});


// $('.toast').toast({
//   autohide: false
// })
// const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

// function showNotification(){
//  const notif = document.createElement('div');
//   notif.classList.add('toast');
  
//   notif.innerText = getMessage();
//   toasts.appendChild(notif);
  
  // setTimeout(() => {
  //   notif.remove()
  // }, 3000)
  
// }
function getMessage(){
  return 'null';
}

// button.addEventListener('click', () => showNotification());
// showNotification();

