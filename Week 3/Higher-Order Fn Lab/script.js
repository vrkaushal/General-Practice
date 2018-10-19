// Created a higher-order function that takes a function

function output(string, action){
    action(string);
}

output('boiii', alert);


// Created a higher-order function that returns a function

function isEqualTo(strings2Men){
    return (trueski) => {
        return trueski === strings2Men;
    }
}

let testShit = isEqualTo('coffee');
console.log(testShit('tea'))


// ARRAY METHODS //

// array filter

var bugsLife = ['ladybug', 'stinkbug', 'beetle', 'latte'];

console.log(bugsLife);

let bugsBunny = bugsLife.filter(blah => {
    return  blah === "ladybug" || blah === "stinkbug" || blah === "beetle"
})

console.log(bugsBunny);

// array method



