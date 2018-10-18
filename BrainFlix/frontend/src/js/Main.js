import React from 'react';
import MainVideoContent from './MainVideoContent';
import VideoList from './VideoList';

// this renders both mainvideocontent component and videolist component
class Main extends React.Component {
    
    state = {
        videos: [],
        currentVideo: {id: '', comments:[]}
    }

    // when the Main component renders on the page, 
    // we are going to call a function called "componentDidMount" 
    // and do a get request to get the videos data 
    // and pass it to its child components (MainVideoContent and VideoList)
    componentDidMount = () => {
        fetch('http://localhost:3001/videos')
        .then(response => {
            return response.json()
        })
        .then(videoData => {
            this.setState({
                videos: videoData
            })
            this.getVideo(this.props.match.params.id || 0)
        })
    }

    // this function runs when either a prop or state changes
    // in this case, there is a condition, 
    // when the prop (videoId in the url) changes, 
    // do a get request to get the new video to render
    componentDidUpdate = (prevProp, prevState) => {
        console.log('comp updated')
        let oldID = prevProp.match.params.videoId || 0;
        // params is coming from the url which is a string
        console.log('match', this.props.match.params.videoId, 'oldId',  oldID);
        if (this.props.match.params.videoId !== oldID) {
            console.log('trying to update');
            fetch(`http://localhost:3001/videos/${this.props.match.params.videoId}`)
            .then(response => {
                return response.json()
            })
            .then(vidData => {
                this.setState({
                    currentVideo: vidData
                })
            })
        }
    }

    // this video 
    getVideo = (id) => {
        fetch(`http://localhost:3001/videos/${this.props.match.params.videoId}`)
        .then(response => {
            return response.json()
        })
        .then(vidData => {
            this.setState({
                currentVideo: vidData
            })
        })
    }

    // this is a function sends a post request
    // to post a new comment
    postNewComment = (newComment) => {
        const postOptions = {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'content-type': 'application/json'
            }
        }
        fetch(`http://localhost:3001/videos/${this.props.match.params.videoId}/comments`, postOptions)
        .then(response => response.json())
        .then(data => {
            // let newComments = [...this.state.comments, newComment];
            // this.setState({
            //     comments: newComments 
            // });
            this.getVideo(this.props.match.params.videoId);
        })
    }

    render() {
        console.log('this is my comment array ', this.state.currentVideo.comments)
        // console.log('this.props.match.params.videoId: ', this.props.match.params.videoId)
        
        return (
            <div className="content__wrapper">
                <MainVideoContent currentVideo={this.state.currentVideo} 
                                    postNewComment={this.postNewComment}/>

                {/* <VideoList videos={this.state.videos} 
                            currentVideo={this.state.currentVideo} 
                            videoId={this.props.videoId} />
                            match={this.props.match}   
                            onClick={this.clickHandler}/> */}
                <VideoList videos={this.state.videos} 
                            match={this.props.match}
                            />
            </div>
        )
    }
}

export default Main;

