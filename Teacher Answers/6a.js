function VowelCount(mystr)
{
		var str = mystr;
		var count ={a:0, e:0, i:0, o:0, u:0}
		var a = str.split("")
		for(var i=0;i<a.length;i++){
			if(a[i] == "a"){
            count.a += 1
	        }
	        if(a[i] == "e"){
	            count.e += 1
	        }
	        if(a[i] == "i"){
	            count.i += 1
	        }
	        if(a[i] == "o"){
	            count.o += 1
	        }
	        if(a[i] == "u"){
	            count.u += 1
	        }
		}
		return(JSON.stringify(count))
	}

var result = VowelCount("Le tour De France");
console.log(result);