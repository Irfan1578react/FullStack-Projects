// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


// Write the function to find the findDigit obtained.

var findDigit = function(num, nth){
     //your code here
     
     if(num<0){
      num=num*-1;
      
     }
    num=num.toString();
    
     if(nth<=0){
      return -1;
     }
     else if(nth>num.length){
      
      return 0;
     }
     else{
      return Number(num[num.length-nth]);
     }

  }
  
 





//Use SpecRunner to check the Test Cases.