// create an object with the object literal syntax
let comment = {
  name: "Nigel",
  comment: "Such site. Wow."
};
console.log(typeof comment);
console.log(comment);

// converting from object to JSON string
let stringifiedComment = JSON.stringify(comment);
console.log(typeof stringifiedComment);
console.log(stringifiedComment);

// converting from JSON string to object
let parsedComment = JSON.parse(stringifiedComment);
console.log(typeof parsedComment);
console.log(parsedComment);

// creating a JSON string manually and converting it to an object
let jsonString = '{}';
let parsed = JSON.parse(jsonString);
console.log(typeof parsed);
console.log(parsed);

// converting an array into a JSON string
let array = [
  {
    name: "Nigel",
    comment: "Almost done"
  },
  {
    name: "Ian",
    comment: "cool"
  }
];
let stringifiedArray = JSON.stringify(array);
console.log(typeof stringifiedArray);
console.log(stringifiedArray);

// trying to parse an invalid JSON string to an object (will error)
// JSON.parse('Hi');

// Lab Starter
let request = fetch("https://api.nasa.gov/planetary/apod?api_key=sk3UhK7XD2qTwPOtYEK4Ry97zKYQlmsFayxqFZ5S");
console.log(request);

request.then((response) => {
  console.log(response);
  return response.json();
})
.then((json) => {
  console.log(json);
  setRequestUrl(json.url);
  setTitle(json.title);
  setMedia(json.media_type, json.hdurl);
  setReturnObject(json);
});

function setRequestUrl(url) {
  let requestUrl = document.getElementById("requestUrl");
  requestUrl.innerHTML = url;
}

function setTitle(title) {
  let titleElem = document.getElementById("title");
  titleElem.innerHTML = title;
}

function setMedia(mediaType, mediaUrl) {
  if (mediaType === 'video') {
    let mediaElement = document.getElementById("vid_id");
    mediaElement.setAttribute("src", mediaUrl);
  } else {
    let mediaElement = document.getElementById("img_id");
    mediaElement.setAttribute("src", mediaUrl);
  }
}

function setReturnObject(json) {
  let stringified = JSON.stringify(json);
  let elem = document.getElementById("returnObject");
  elem.innerHTML = stringified;
}