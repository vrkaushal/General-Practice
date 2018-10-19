function mySubmitHandler(event){
    event.preventDefault(); // prevent the form from refreshing page

    // grab the email input DOM object
    var emailDOMElement = document.getElementById('emailInput');
    // pull the value out of the DOM object using .value
    var emailTextValue = emailDOMElement.value;
    console.log(emailTextValue);
}

var form = document.getElementById('myForm');
form.onsubmit = mySubmitHandler;