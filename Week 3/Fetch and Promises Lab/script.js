function clickHandler(){
    setTimeout(()=>{console.log("clicked")},1000);
}

window.addEventListener('click', clickHandler);

// Use fetch to GET show dates from website

fetch('https://project-1-api.herokuapp.com/showdates')
.then( (response)=>{console.log(response.json())})
.catch( (err)=>{console.log('error')})

// Use fetch to POST comments to website

let comment = {"comment":"I am commenting"}

let init = {body: JSON.stringify(comment), method: 'POST', mode: "cors", headers: {'content-type':'application/json'}};

fetch('https://project-1-api.herokuapp.com/comments', init)
.then(()=>{console.log("commented")})
.catch(()=>{console.log("error")})


// Use fetch to GET comments from website

fetch('https://project-1-api.herokuapp.com/comments')
.then((response)=>{for (let i = 0; i < )})
