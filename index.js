// Uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(defaultActivity = 'roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`;
}

// Defined mondayWork function expression that uses the default activity 'go to the office' when no arguments are passed.
let mondayWork = function(defaultActivity = 'go to the office') {
    return `This Monday, I will ${defaultActivity}.`
}

// Defines wrapAdjective function according to the specification that when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
let wrapAdjective = function(visualFlairString = '*') {
    return function(adjective = 'special') {
        return `You are ${visualFlairString}${adjective}${visualFlairString}!`;
    }
}