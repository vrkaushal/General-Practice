import React from 'react';

class VideoListItems extends React.Component {
    render() {
        // destructuring our object for convenience
        const { title, channel, views, image, duration } = this.props;

        return (
            <div className="videoList__item">
                {/* this is the left side of each individual video list item which has the video thumbnail */}
                <div className="videoList__item--left">
                    <img className="videoList__item--thumbnail" src={image} />
                    <p>{duration}</p>
                </div>
                {/* this is the right side of each individual video list item which has the video information */}
                <div className="videoList__item--right">
                    <div className="videoList__item--info">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>{views} views</p>
                            {/* can you use views.toFixed(1) here? to change to scientific notation */}
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoListItems;