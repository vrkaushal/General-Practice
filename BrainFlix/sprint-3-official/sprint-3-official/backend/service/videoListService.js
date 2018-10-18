const uuidv1 = require('uuid/v1'); // universal unique identifier - package that generates and uniquely identifies object
let videoData = require('../data/videos.json'); // detailed video list
let videoList = require('../data/videoLinks.json'); // general video list


// this function returns the list of videos array 
function getVideoList() {
    return videoList;
}

// this function takes in an id parameter
// returns the video with that specific id 
function findVideo(id) {
  let foundVideo;
  videoData.map(mainVideo => {
    if (mainVideo.id === id) {
      foundVideo = mainVideo;
      console.log('video found!')
    } else {
      res.status(404);
    }
  })
  return foundVideo;
}


// this function takes in title and description
// creates a new video object with the new title and description
// pushes the new video object to the video data (detailed video list)
function addVideo(title, description) {
  let id = uuidv1(); // this function is the package that was installed which generates a random number for the id 
  const newVideo = {
    id: id, 
    title,
    description,
    channel: "MLB",
    views: "0",
    duration: "11:31",
    image: "https://i.imgur.com/3WPEmCJ.jpeg",
    video: "http://localhost:3000/sample.mp4",
    thumbsUp: 0,
    thumbsDown: 0,
    subscriberCount: "1.2M",
    comments:[]
  }
  videoData.push(newVideo);


  // pushes the new video object to videoLinks (summary of video list)
  const summaryVideo = {
    id: id,
    title,
    channel: "MLB",
    views: "0",
    duration: "11:31",
    image: "https://i.imgur.com/3WPEmCJ.jpeg"
  }
  videoList.push(summaryVideo);
  
  // return added video data
  return newVideo;
};



function addComment(name, comment, id) {
  let newArray = []
  videoData.map(video => {
    if (video.id !== id) {
      newArray.push(video);
    } else {
      let newComment = {...video, comments: [...video.comments, {name, comment, id: uuidv1(), timestamp: new Date()}]};
      newArray.push(newComment);
    }
  })
  videoData = newArray;
  return newArray;
}

module.exports = {
  getVideoList,
  findVideo,
  addVideo,
  addComment
}

