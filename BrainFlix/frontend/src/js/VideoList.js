import React from 'react';
import {Link} from 'react-router-dom';
import VideoListItems from './VideoListItems';
import {abbreviateNumber} from './utility';

// this is the list of "up next" videos 
class VideoList extends React.Component {

    render() {
       
        const videos = this.props.videos;  // passes the array of video list objects as props
        console.log('videos: ', videos); //to confirm

        // if the video id is the clicked video id, 
        // display that video on the main videos section
        // if not, display the first video (currentVideo[0]) as default
        // const videoId = this.props.match.params.videoId ? this.props.match.params.videoId : this.props.currentVideo.id;
        // console.log('video id: ', videoId) //shows which video id is displayed
        const videoId = this.props.match.params.videoId;

        // the current video id is in the variable called videoId
        // we need to filter out videos with ids that are not in the current videoId
        const filteredVidList = videos.filter(videoItem => videoItem.id != videoId);
        console.table(filteredVidList) //prints the filtered video list in table form 

        // this will go through each object in the array 
        // and store the passed data into its designated place
        let newVideoItem = filteredVidList.map(videoItem => {
            return (
                // applies links to each video item in the sidebar
                // so when one of the videos is clicked, 
                // it changes the url to that specific video id 
                <Link to={`/videos/${videoItem.id}`}>
                    <VideoListItems image={videoItem.image}
                                    title={videoItem.title}
                                    channel={videoItem.channel}
                                    views={abbreviateNumber(videoItem.views)}
                                    duration={videoItem.duration}
                                    key={videoItem.id} />
                </Link>
            )
        }) 
        
        return (
            <aside>
                <h3>Up next</h3>
                {newVideoItem}
            </aside>
        )
    }
}

export default VideoList;

