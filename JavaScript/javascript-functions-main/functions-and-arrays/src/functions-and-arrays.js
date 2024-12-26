// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  return Math.max(num1,num2);
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length===0){
    return null;
  }
  let len=0;
  for(let i=0;i<words.length;i++){
    len=Math.max(words[i].length,len);
  }
  for(let i=0;i<words.length;i++){
    if(words[i].length===len){
      return words[i];
    }
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
  }
  return sum;
}

function add(arr){
  let tot=0;
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])==="string"){
      tot+=arr[i].length;
    }
    else if(typeof(arr[i])==="number"){
      tot+=arr[i];
    }
    else if(typeof(arr[i])==="boolean"){
      if(arr[i]){
        tot+=1;
      }
    }
    else{
     throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return tot;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  let tot=0;
  if(numbersAvg.length===0){
    return null;
  }
  for(let i=0;i<numbersAvg.length;i++){
    tot+=numbersAvg[i];
  }
  return tot/numbersAvg.length;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  let tot=0;
  if(wordsArr.length===0){
    return null;
  }
  for(let i=0;i<wordsArr.length;i++){
    tot+=wordsArr[i].length;
  }
  return tot/wordsArr.length;
}
function avg(arr){
  if(arr.length===0){
    return null;
  }
  let tot=0;
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])==="string"){
      tot+=arr[i].length;
    }
    else if(typeof(arr[i])==="number"){
      tot+=arr[i];
    }
    else if(typeof(arr[i])==="boolean"){
      if(arr[i]){
        tot+=1;
      }
  }
}
return parseFloat((tot/arr.length).toFixed(2));
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
  const myset=new Set();
  if(wordsUnique.length>0){
    for(let i=0;i<wordsUnique.length;i++){
      myset.add(wordsUnique[i]);
    }
    return Array.from(myset);
  }
  return null;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,ele){
  if(wordsFind.length===0){
    return null;
  }
  for(let i=0;i<wordsFind.length;i++){
    if(wordsFind[i]===ele){
      return true;
    }
  }
  return false;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount,ele){
  let count=0;
  if(wordsCount.length===0){
    return count;
  }
  for(let i=0;i<wordsCount.length;i++){
    if(wordsCount[i]===ele){
      count++;
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45]
];
function maximumProduct(matrix){
  for(let i=0;i<matrix.length;i++ ){
    for(let j=0;j<matrix[0].length;j++){
      if(matrix[i][j]===1){
        continue;
      }
      else{
        return;
      }
    }
  }
  return 1;

}
