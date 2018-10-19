function outputName(name){
    var output = 'Your name is: ' + name;
    console.log(output);
}

function sayMyName(first, last, fnToCall){
    var fullName = first + ' ' + last;
    fnToCall(fullName);
}

sayMyName('Robert', 'Glasper', outputName);

sayMyName('Robby','Glas', console.log);



setTimeout(function(){
    console.log('yoyoyoyoyoyoyoyo')
}, 2000);


setTimeout(function(){
    sayMyName('Robby','Glas', console.log);    
}, 2000);
