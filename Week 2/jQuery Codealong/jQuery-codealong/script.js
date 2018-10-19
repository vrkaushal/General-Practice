
$(document).ready(function(){
    let user = {name: 'j', password: 'javascript'};

    $('#greeting').text('Welcome to POP! MUTHAFUVKJSHG');
    $('#form-btn').hover(function(){
        $('#form-btn').css('background-color','rgb(247,154,138)');
    }, function(){
        $('#form-btn').css('background-color','rgb(243,121,126)')
    })
    
    $('avatar').attr('src','./assets/male-2.png');

    $('#form-btn').click(function(event){
        
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        if (username !== user.name){
            $('#username-error').removeClass('hide');
        } else {
            $('#username-error').addClass('hide');
        }
        if (password !== user.password){
            $('#password-error').removeClass('hide');
        } else {
            $('password-error').addClass('hide');
        }

        if (username === user.name && password === user.password){
            fadeOut();
            $('#bg-container--gradient').animate({left:'-200%'},1200,null,function(){
                $('#bg-container--gradient').remove();
            });
            $('#bg-container--solid').animate({bottom:'-200%'},1200,null, function(){
                $('#bg-container--solid').remove();
            });
        }

    })
})

function fadeOut(){
    $('.login-container').animate({opacity: 0});
    setTimeout(()=>{
        $('.home-container').css({'z-index':3})
     }, 1000)
}



        // 1. Import jQuery cdn.

        // 2. Add a script tag or import your javascript file into this HTML file.
        //       - Add the function that waits for the DOM to be completed before it runs your jQuery.
        //       - Add let user = {name: 'jQueryJunkie', password: 'javascript'}; to your script tag or js file.

        // 3. Edit the h5 tag with the id of 'greeting' to say 'Welcome to' the array / string method of your choice.

        // 4. Change the background colour of the button with the id of 'form-btn' when user hovers over it.
        //       - Remember to change it back to its original colour when the user is no longer hovering over
        //       the button.

        // 5. Target the image tag with the id=avatar and change the source attribute to an image of your choice 
        //    from the assets/avatars folder.

        // 6. When the submit button is clicked, check if username and password matches user object. 
        //       - To stop the page from reloading, you use must event.preventDefault() at the beginning of your  
        //       click event handler.
        //       - If it doesn't match, remove the class 'hide' and add the class 'error' to the appropiate input field.
        //       - If it does match, call the fadeOut function and animate the two angled backgrounds until they are off
        //       the screen. It is recommended to animate the pink background to the left and the white background downwards.



        // Diving Deeper
        //     - Try taking the value of the username and append it on the success page to congratulate the user on successfully
        //     completing the codealong.   
    