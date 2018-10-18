import React from 'react';

// this is the main video (clicked video) component
class MainVideo extends React.Component {

    render() {
        return (
            <div className="main__video--content">
                <video src={`${this.props.videoSrc}`}
                    poster={this.props.imageSrc}
                    type ="video/mp4"
                    controls ="true" 
                    className="main__video"/>
            </div>
        )
    }
}

export default MainVideo;













// when the video source (base url) is passed as a prop, 
        // it passes without the api key 
        // concatenated the base url and api key 
        // let baseUrl = this.props.videoSrc;
        // let apiKey = '?api_key=9ad6e773-d2e2-47ab-9a5d-11d063cb25a0';
        // let url = baseUrl + apiKey;