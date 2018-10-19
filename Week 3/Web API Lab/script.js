fetch("https://api.nasa.gov/planetary/apod?api_key=M1cT6j2rEZ9RNjX3tWeGjWq7TpVE9tV04PUUYgR9")
.then((response) => {
    console.log(response)
    return response.json();
})
.then((json) => {
    console.log(json);
    let requestUrl = document.getElementById("requestUrl");
    requestUrl.innerHTML = json.url;
})

