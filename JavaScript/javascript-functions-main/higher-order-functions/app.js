const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
function sliceex(foods,start,end){
    let modifiedFood=foods.slice(start,end);
    return modifiedFood;

}
const foods2=["pizza", "burger", "fingerChips", "donuts", "springRoll"];
function spliceex(foods,startind,count,elements){
    foods.splice(startind,count,...elements);
    return foods;
}
const numberArray = [12,324,213,4,2,3,45,4234];
function filterEven(num){
    if(num%2==0){
        return true;
    }
    return false;
}
function isEven(numberArray){
    const evenele=numberArray.filter(filterEven);
    return evenele;
}
function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
function nonPrime(numberArray){
    let nonPrimeele=[];
    for(let i=0;i<numberArray.length;i++){
        if(!isPrime(numberArray[i])){
            nonPrimeele.push(numberArray[i]);
        }
    }
    return nonPrimeele;
}
function isEvenlam(numberArray){
    const evenele=numberArray.filter(num => num%2==0);
    return evenele;
}

const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    const squareele=myArray.map(num => num*num);
    return squareele;
}
const arr=[2, 3, 5, 10];
function multiply(arr){
    const reducedval=arr.reduce((acc,num) => acc*num,1);
    return reducedval;
}

function chaining(arr){
    const chainedval=arr.map(num => num*num).reduce((acc,num) => acc*num,1);
    return chainedval;
}
console.log("Sliced ele"+ sliceex(foods,1,3));
console.log("Spliced ele "+ spliceex(foods2,1,0,["paratto","dosa"]));
console.log("Even ele "+ isEven(numberArray));
console.log("Non prime ele "+ nonPrime(numberArray));
console.log("Even using lambda "+ isEvenlam(numberArray));
console.log("Square of ele "+ findSquareOfNumbers(myArray));
console.log("Reduced function "+ multiply(arr));
console.log("Chaining "+ chaining(arr));
