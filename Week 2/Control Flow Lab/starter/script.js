//* IF/ELSE STATEMENTS *//

var time = Number;
var timeOfWeek = String;

time = 11;
timeOfWeek='weekday';

if ((time < 10) && (timeOfWeek==='weekday')){
    console.log("You're early!");
}
else if((time === 10) && (timeOfWeek==='weekday')){
    console.log("You're on time!");
}
else if((time > 10) && (timeOfWeek==='weekday')){
    console.log("LATE BIIIIITCH");
}
else{
    console.log("YOU SHOULDN'T BE HERE NERD");
}

//* SWITCH STATEMENTS *//

var facialExpression = String;

facialExpression = "scowl";

switch (facialExpression){
    case "smiling":
        console.log("you look happy");
        break
    case "frowning":
        console.log("you look sad");
        break
    case "scowl":
        console.log("you look angry");
        break
    default:
        console.log("I dont know");
}


///* FOR LOOOOOOOPS *///

var famousCats = ['garfield',"felix", 'meowth'];

for(i=0; i<famousCats.length; i++){
    console.log(famousCats[i]);
}

for(i=1; i<famousCats.length; i++){
    console.log(famousCats[i]);
}

for(i=famousCats.length-1; i>=0; i--){
    console.log(famousCats[i]);
}

///* WHILE LOOOOOOPS *///

i=0;
while (i<famousCats.length) {
    console.log(famousCats[i])
    i=i+1;
}

///* TERMINATING A LOOOOOOOP *///

var myFav = String;
myFav = 'meowth';

for(i=0;i<famousCats.length;i++){
    if (famousCats[i] !== myFav){
        console.log(famousCats[i] + "    Kitty?");
    }
    else {
        console.log(famousCats[i] + "     THERE YOU ARE!");
        break;
    }
}

///* TERMINATING A WHILE LOOOOOOOP *////
i=0;
while(i<famousCats.length){
    if (famousCats[i] !== myFav){
        console.log(famousCats[i] + "    Kitty?");
    }
    else {
        console.log(famousCats[i] + "     THERE YOU ARE!");
        break
    }
    i=i+1;
}







