///* GET REQUEST FOR SHOW DATES *///

let request = fetch('https://project-1-api.herokuapp.com/showdates?api_key=3718ddd4-5894-4151-8676-d440c0e4751');

request.then((request) => {
    console.log(request);
    return request.json();
})
.then((json) => {
    console.log(json);
    for(var i=0; i < json.length; i++){
        // if statement to find last element and declare boolean
        if (i===(json.length-1)){
            isLast = true
        }
        else{isLast = false}
        postShow(json[i], isLast);
    };
})

// FUNCTION TO BE CALLED TO READ GET PROMISE AND POST SHOW DATES TO PAGE

function postShow(object, lastIndex){

    let showList = document.querySelector('.showList');
    let showObject = document.createElement('div');
    showObject.classList.add("showList__Row");
    showList.appendChild(showObject);

    // if it is last element remove the line divider (border-bottom)
    if (lastIndex){
        showObject.id = "lastRow";
    }


    var addShowDate = document.createElement('div');
    addShowDate.classList.add("bolded");
    addShowDate.id= "showDate";
    addShowDate.innerHTML = object.date;
    showObject.appendChild(addShowDate);
    

    var addShowPlace = document.createElement('div');
    addShowPlace.id="showPlace";
    addShowPlace.innerHTML = object.place;
    showObject.appendChild(addShowPlace);
    addShowDate.appendChild(addShowPlace);

    var addShowLocation = document.createElement('div');
    addShowLocation.id ="showLocation";
    addShowLocation.innerHTML = object.location;
    showObject.appendChild(addShowLocation);

    var addShowButton = document.createElement('button');
    addShowButton.classList.add('buttonText');
    addShowButton.innerHTML = 'GET TICKETS';
    showObject.appendChild(addShowButton);

}


