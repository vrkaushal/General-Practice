// /* storedComments is an array that holds the comments that are loaded when the page loads */

// storedComments = [
//     {name:"Jack Deng", msg:"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},
//     {name:"Corey Kohan", msg:"Its just amazing all the sounds that come out of this band. Neil is just an animal on the drum kit and Geddy and Alex are just as good on their instruments."},
//     {name:"Edward Anthony", msg:"These guys are beyond great. The opening melody was incredible and had to be very difficult. The #1 band I regret not seeing LIVE."},
//     {name:"Jill Saunders", msg:"Masters of their instruments and on time with each other all the time, perfect what a pleasure."}
// ]

// /* unnamed function called when the webpage loads */
// /* for loop iterates through the array and calls the createComment function to post
//  the stored comments on to the comment board */

// window.onload = function(){
//     for(var i=0; i < storedComments.length; i++){
//         createComment(storedComments[i]);
//     };
// }

// createComment function called when page loads to post array of stored comments to page
// also called when the post comment button is clicked
// by passing a generic object variable as the argument, it allows the function to be reused
// by both the array and the new comments inputted from the HTML form
// the function creates new html elements with a specific ID that is styled in CSS

function createComment(object){
    var added = document.createElement('div');
    added.id = "comment__container";
    added.innerHTML = object.name + '<br>';
    
    var addCom = document.createElement('div');
    addCom.id = "comment__msg";
    addCom.innerHTML = object.comment + '<br>';
    added.appendChild(addCom);

    var commentList = document.getElementById('commentList');
    commentList.appendChild(added);

}


///* GET REQUEST FOR COMMENT ARRAY *///

let request = fetch("https://project-1-api.herokuapp.com/comments?api_key=3718ddd4-5894-4151-8676-d440c0e4751");


request.then((request) => {
    console.log(request);
    return request.json();
})
.then((json) => {
    console.log(json);
    for(var i=0; i < json.length; i++){
    createComment(json[i]);
    };
})


// Comment() function is called upon click of the post comment button
// it prevents default behaviour so that the page isnt refreshed
// it creates and object for the new comment information and sends POST request to push it to the server array
// it resets the HTML forms to blank

function Comment(){

    event.preventDefault();

    let newComment = {
        name: document.getElementById('textInput1').value,
        comment: document.getElementById('textInput2').value
    } 

    let init = {body:JSON.stringify(newComment),
                method: 'POST',
                mode: 'cors',
                headers: {'content-type':'application/json'}
            };
    
    let postComment = fetch('https://project-1-api.herokuapp.com/comments?api_key=3718ddd4-5894-4151-8676-d440c0e4751', init);
    
    postComment.then((response) => {
        console.log(response.json());
        createComment(newComment);
    })


    document.getElementById('textInput1').value = "";
    document.getElementById('textInput2').value = "";
}


