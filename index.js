function scuberGreetingForFeet(x){
  // Write your code here!
  let greeting  = '';
  if(x<=400){
    greeting = 'This one is on me!'
  }else if(x>2000&&x<2500) {
    greeting = 'I will gladly take your thirty bucks.';
  }else if(x>2500) {
    greeting = 'No can do.';
  }else{
    greeting = '';
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  let feedback = 'No go.'
    if(city=='NYC'){
      feedback = 'Ok, sounds good.'
    }
    return feedback;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
    let response = 'bye'
    switch(tip){
      case 'generous': 
          response = "Thank you so much."
          break;

      case 'not as generous': 
          response = "Thank you."
          break;

      default :       
          response = "Bye."
    }
    
    return response;
}