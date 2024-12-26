function calculateTip(amount, rating) {
    //your code here
    if(rating==="Terrible" ||rating ==="terrible"){
      return 0;
    }
    else if(rating==="Poor"||rating==="poor"){
      return Math.ceil((amount/100)*5);
    }
    else if(rating==="Good"||rating==="good"){
      return Math.ceil((amount/100)*10);
    }
    else if(rating==="Great"||rating==="great"){
      return Math.ceil((amount/100)*15);
    }
    else if(rating==="Excellent"||rating==="excellent"){
      return Math.ceil((amount/100)*20);
    }
    else{
      return "Rating not recognised";
    }
  }

//Use SpecRunner to check the Test Cases.