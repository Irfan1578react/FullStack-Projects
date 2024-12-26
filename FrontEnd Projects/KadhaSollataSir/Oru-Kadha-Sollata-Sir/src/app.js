//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

const moreAboutHome =(address,distanceFromTown,hasNeighbours) =>{
    let datas='';
    datas+=(typeof address)+(typeof distanceFromTown)+(typeof hasNeighbours);
    return datas;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
const moreAboutKaren=(parents, noOfSiblings, isNuclearFamily) =>{
    if((typeof parents)==="string" && (typeof noOfSiblings)==="number" && (typeof isNuclearFamily)==="boolean"){
        return true;
    }
    else{
        return false;
    }

}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
const doesFriendExist= (ageInText, ageInNumber) => {
    if(isNaN(ageInText)){
        return ageInText;
    }
    else{
        return ageInNumber;
    }

}


//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
const sweetTooth=(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) => {
    if( totalNoOfSweets===0 &&sweetsConsumedByKaren===0 && sweetsConsumedInNMeters===0 && metersToTravel===0 ){
        return 0;
    }
    else if(!totalNoOfSweets || (typeof totalNoOfSweets)==="string"){
        return "No sweets for Karen's friend"
    }
    let rem= (totalNoOfSweets-(sweetsConsumedByKaren+(sweetsConsumedInNMeters*metersToTravel)));
    if(rem==0){
        return 0;
    }
    else{
        return rem/2;
    }
    
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
const convertToCelsius=(fahrenheit) =>{
    if(fahrenheit && typeof(fahrenheit)==="number" ){
        return (fahrenheit - 32) * 5 / 9;
    }
    else{
        return "Technical Error!";
    }

}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
const aDifficultChoice=(choice) => {
    switch(choice){
        case 1:
            return "Take her daughter to a doctor";
        case 2:
            return "Talk to her husband about it";
        case 3:
            return "Counsel her daughter herself";
        case 4:
            return  "Lock her daughter in her room";
        default:
            if(choice===-1){
                return "Break down and give up all hope";
            }
            else if( choice==="I give up"){
                return "Refused to do anything for Karen";
            }
            else{
                return "Wasn't able to decide";
            }               
    }

}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
const consoleKaren=(strategies) =>{
    var len=strategies.join(" ").length;
    return len;


}
