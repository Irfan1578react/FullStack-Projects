// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


// Write the function to find the getGrade obtained.
function getGrade (s1, s2, s3) {
  let avg=(s1+s2+s3)/3;
  if(90<=avg && avg<=100){
    return 'A';
  }
  else if(80<=avg && avg<90){
    return 'B';
  }
  else if(70<=avg && avg<80){
    return 'C';
  }
  else if(60<=avg && avg<70){
    return 'D';
  }
  else{
    return 'F';
  }
   //your code here
  }
//Use SpecRunner to check the Test Cases.