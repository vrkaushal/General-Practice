function clickHandler(){
    // in here we write the code
    // that we want to execute when a click happens

    // create a new li element
    var newLi = document.createElement('li');

    // put text inside of that li element
    newLi.innerHTML = 'yo';

    // grab the ul, and append our new li into it
    var theList = document.getElementById('theList');
    
    // to append, take the parent dom element, call medthod appendChild()
    theList.appendChild(newLi);
}

// to register an eventHandler
    // 1. use DOM functions to grab the subject/target of the event
    var theButton = document.getElementById('theButton');
    
    // Event Listener function using addEventListener
    theButton.addEventListener('click', clickHandler);

    // Alternative way by directly setting the function as value of 
    // .onclick property
    theButton.onclick= clickHandler;
    