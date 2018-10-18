import React from 'react';

class MainVideoInfo extends React.Component {

    render() {
        
        // destructuring syntax to 'unpack' properties from objects into variables
        const { title, views, thumbsUp, thumbsDown, channel, date, subscriberCount, description } = this.props;

        return (
            // this whole thing renders the video info and description section
            <div className="mainVideo__info">

                {/* this is the primary info for the main video - the first half */}
                <div className="mainVideo__info--primaryInfo">
                    <h2>{title}</h2>
                    <div className="mainVideo__stats">
                        <div className="mainVideo__stats--views">
                            <h4>{views} views</h4>
                        </div>
                        <div className="mainVideo__stats--buttons">
                            <div className="stats__button stats__buttons--like">
                                <img src="../Assets/Icons/thumbs-up.svg" />
                                <span>{thumbsUp}</span>
                            </div>
                            <div className="stats__button buttons__dislike">
                                <img src="../Assets/Icons/thumbs-down.svg" />
                                <span>{thumbsDown}</span>
                            </div>
                            <div className="stats__button buttons__share">
                                <img src="../Assets/Icons/Share.svg" />
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* this is the secondary info for the main video - the second half */}
                <div className="mainVideo__info--secondaryInfo">
                    <div className="mainVideo__channelInfo">
                        <div className="mainVideo__channelInfo--thumbnail">
                            {/* <img src="../Assets/Images/john_gibbons.jpg" /> */}
                        </div>
                        <div className="mainVideo__channelInfo--user">
                            <h5>{channel}</h5>
                            <p>Published on October 14, 2015</p>
                        </div>
                        <button className="mainVideo__subscribe--button">
                            Subscribe
                            <span>{subscriberCount}</span>
                        </button>
                    </div>

                    <div className="mainVideo__description">
                        <p>{description}</p>
                        <h5>Show More</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainVideoInfo;