function timeInWords(h, m) {


    var time = ["o' clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen","twenty","thirty", "forty", "fifty"];
    
     var b = "";
    var minutes = "";
    
    if( m != 0){
    m = parseInt(m,10);
    } else {
     m = 0;
    }
    
    if(m <= 30 && m >= 1) {
        b = "past"
    } else if(m >= 31 && m <= 59) {
        b = "to"
    }
    
    
    
    if(m <= 20 ){
        minutes = time[m];
    }
    
    if(m >= 21 && m <= 29) {
        var arr = m.toString().split('');
        minutes = time[20] + " " + time[arr[1]]; 
    }
    
    if(m >= 30 && m <= 39) {
        var arr1 = m.toString().split('');
        minutes = time[21] + " " + time[arr1[1]]; 
    }
    
    if(m >= 40 && m <= 49) {
        var arr2 = m.toString().split('');
        minutes = time[22] + " " + time[arr2[1]]; 
    }
    
    if(m >= 50 && m <= 59) {
        var arr3 = m.toString().split('');
        minutes = time[23] + " " + time[arr3[1]]; 
    }
    
    	 if(m == 0){
      	return  time[h] + " " + time[0];	
      }
    
     if(m <= 30 && m >= 1) {
    	//return time[h] + " " + b + " " + minutes;
     
      
      if(m == 1) {
      	return minutes +  " minute " + b + " " + time[h];	
      }
      
      if(m > 1 && m <= 14){
      	return minutes +  " minutes " + b + " " + time[h];
      }
      
      if(m == 15 ){
      	return  "quarter " + b + " " + time[h];
      }
      
      if(m > 15 && m <= 29){
      	return minutes +  " minutes " + b + " " + time[h];
      }
      
      if(m == 30){
      	return "half " + b + " " + time[h];
      }
      
		}
      
      if(m >=31 && m <= 39){
      	return minutes +  " minutes " + b + " " + time[h];
      }
      
      if(m >=40 && m <= 59){
      	var cont = 60 - m;
        
        if(cont == 20 ) {
          cont = cont.toString().split('');
          return time[20] + " minutes " + b + " " + time[h+1]; 
        	}
           
          if(cont >= 16  && cont <= 19) {
          return time[cont] + " minutes " + b + time[h+1]; 
        	}
          
          if(cont == 15) {
          return "quarter " + b + " " + time[h+1]; 
        	}
          
          if(cont < 15) {
          return time[cont] + " minutes " + b + " " +time[h+1]; 
        	}
        
      }
		
}


//UnitTest
console.log(timeInWords(5,15)); //quarter past five
console.log(timeInWords(5,01)); //one minute past five
console.log(timeInWords(10,30)); //half past ten
console.log(timeInWords(8,45)); //quarter to nine
