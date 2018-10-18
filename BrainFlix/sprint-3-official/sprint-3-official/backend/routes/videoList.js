const express = require('express'); // require express
const router = express.Router(); // call express function
const videoListService = require('../service/videoListService'); // require the functions


// this is when the server receives a GET request,
// the server will send back an array of video list objects
router.get('/', (req, res) => {
  const videoList = videoListService.getVideoList();
  res.json(videoList);
});


// this is when the server receives a GET request for a specific id
// the function "findVideo" will check through the videoList data 
// and find the video with the correct id 
// and send back that video data 
router.get('/:videoId', (req,res) => {
  const videoId = req.params.videoId; // finds the :videoID parameter in the url 
  const videoFound = videoListService.findVideo(videoId); // calls findVideo function to find the video with the specific id
  res.json(videoFound); // returns the found video data 
})


// post request to receive uploaded videos 
// stores the title and description received from front-end
// sends an error if one or the other are not provided
// sends a response back of the received uploaded video 
router.post('/',(req,res,next) => {
  const title= req.body.title;
  const description = req.body.description;
  if(!title || !description) {
    res.status(400).send('Error - please provide a title and description for the video.');
  }
  const addedVideo = videoListService.addVideo(title, description); // passes the title/description input to the addVideo function
  res.json(addedVideo)
})


// post request to receive comments 
// sends an error response if no name/comment are provided
// sends back a the video data with the specific id and the comments included
router.post('/:videoId/comments', (req,res,next) => {
  const name = req.body.name;
  const comment = req.body.comment;
  const videoId = req.params.videoId;
  if(!name || !comment) {
    res.status(400).send('Error - please provide a name and comment');
  } 
  const commentAdded = videoListService.addComment(name, comment, videoId);
  res.json(commentAdded)
})


module.exports = router;
