import React from 'react';
import MainVideo from './MainVideo';
import MainVideoInfo from './MainVideoInfo';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import {abbreviateNumber, addCommas} from './utility';

// this is the main video content (left section of the site) 
// which includes the main video (clicked video) component and 
// the main video information component
class MainVideoContent extends React.Component {
    render() {

        // passes the video object as props
        const currentVideo = this.props.currentVideo;
        console.log('currentvid:',currentVideo)
        
        return (
            <main>
                <MainVideo videoSrc={currentVideo.video} imageSrc={currentVideo.image}/> 
                <MainVideoInfo title={currentVideo.title}
                            views={addCommas(currentVideo.views)}
                            thumbsUp={abbreviateNumber(currentVideo.thumbsUp)}
                            thumbsDown={abbreviateNumber(currentVideo.thumbsDown)}
                            channel={currentVideo.channel}
                            date={currentVideo.date} 
                            subscriberCount={currentVideo.subscriberCount} 
                            description={currentVideo.description} 
                            key={currentVideo.id} />
                <CommentInput postNewComment={this.props.postNewComment} />
                <CommentList comments={currentVideo.comments} />
            </main>
        )
    }
}


export default MainVideoContent;