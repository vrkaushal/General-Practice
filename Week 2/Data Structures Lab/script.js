///* Arrays *///


var WebDevTerms = ['variable','object','array'];


console.log(WebDevTerms);
console.log(WebDevTerms[0]);
console.log(WebDevTerms[2]);
console.log(WebDevTerms[5]);

var WebDevTerm2 = new Array();
WebDevTerm2.push('VARIABLE','OBJECT','ARRAY');


console.log(WebDevTerm2.pop()); 
console.log(WebDevTerm2.pop());
console.log(WebDevTerm2.pop());


///* Objects *///

var PeopleLikeJoe = {
    firstName: 'Joe',
    lastName: 'Joe',
    likesCoffee: true,
    speak: function(key){
        console.log(key);
    }
};

console.log(PeopleLikeJoe.firstName);
console.log(PeopleLikeJoe['lastName']);
PeopleLikeJoe.speak(PeopleLikeJoe.likesCoffee);


var PeopleLikeJoe2 = new Object();
PeopleLikeJoe2.firstName = "Joey";
PeopleLikeJoe2['lastName'] = "Joey";
PeopleLikeJoe2.likesCoffee = false;


console.log(PeopleLikeJoe2.firstName);
console.log(PeopleLikeJoe2['lastName']);
