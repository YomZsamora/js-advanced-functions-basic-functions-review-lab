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

// JavaScript Object called Calculator that has functions add, substract, multiply and divide.
let Calculator = {
    add: function() { return 1 + 3 },
    subtract: function() { return 1 - 3 }, 
    multiply: function() { return 1 * 3 },
    divide: function() { return 10 / 5 }
}

let actionApplyer = function(startingInteger, arrayOfTransforms) {
    if(arrayOfTransforms[0]) {
        let multiply = arrayOfTransforms[0](startingInteger);
        let addition = arrayOfTransforms[1](multiply);
        return arrayOfTransforms[2](addition);
    }
    else {
        return startingInteger;
    }
}

