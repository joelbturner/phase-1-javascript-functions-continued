function saturdayFun(activity = 'roller-skate'){
    return 'This Saturday, I want to ' + activity +'!';
}

function mondayWork(activity = 'go to the office'){
    return 'This Monday, I will ' + activity +'.';
}


function wrapAdjective(adjective = '*'){
    return function(special = 'special'){
        return `You are ${adjective}${special}${adjective}!`;
    }
  
}
// function outer(greeting, msg = "It's a fine day to learn") {
 
//   const innerFunction = function (name, lang = "Python") {

//     return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//   };
//   return innerFunction("student", "JavaScript"); // 5
// }

// outer("Hello");