// Uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(defaultActivity = 'roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`;
}

// Defined mondayWork function expression that uses the default activity 'go to the office' when no arguments are passed.
let mondayWork = function(defaultActivity = 'go to the office') {
    return `This Monday, I will ${defaultActivity}.`
}

// Defines wrapAdjective function according to the specification that when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
let wrapAdjective = function() {
    return function(adjective = 'special') {
        return `You are *${adjective}*!`;
    }
}

// function outer(greeting, msg="It's a fine day to learn") { // 2
//     let innerFunction =  function(name, lang="Python") { // 3
//       return `${greeting}, ${name}! ${msg} ${lang}` // 4
//     }
//     return innerFunction("student", "JavaScript") // 5
//   }