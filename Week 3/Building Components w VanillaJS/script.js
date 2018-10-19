

class FishCard{
    constructor(fishName, fishBio){
        /* the job of this constructor is to receive the data
            that is unique to this fish, and put it on the object
            ('this' is set tot he new object, so thats what we put
            the data (fishname/fishbio) on)
        */
       this.name = fishName;
       this.bio = fishBio;
    }
    render(){
        return `
            <div>
                <h2>${this.name}</h2>
                <p>${this.bio}</p>
            </div>
        `;
    }
}


class Navbar{
    // the primary job of a component class/object
    // is output the html that express what it looks 
    // like
    render(){
        return `<nav class="nav__link">
                    <a>HOME</a>
                    <a>FISH</a>
                    <a>ABOUT</a>
                </nav>`
    }
}

// here we use our class blueprint to create
//  one navbar instance
var navbar = new Navbar();

// make a fishcard instance
var randy = new FishCard('Randy', 'randy is a happy fish, always has been');
var joyce = new FishCard('Joyce', 'swedish fish');

class App{
    render(){
        return `<div>
            ${navbar.render()}
            ${randy.render()}
            ${joyce.render()}
        </div>`
    }
}

// to get the APP component on the page, we need to do two steps
    // 1. use 'new' with the App class to create an app instance
    var app = new App();
    // 2. call .render() on that app class, and put it's output 
        //  in the body
// grab the parent that we want to stick our component
// into
var body = document.getElementsByTagName('body');
body[0].innerHTML = app.render();
