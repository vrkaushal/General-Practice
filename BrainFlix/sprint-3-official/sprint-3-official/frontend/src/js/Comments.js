import React from 'react';

// this renders the comment section
class Comments extends React.Component {
    render() {
        const {name, comment, timestamp } = this.props;
        return (
            <div className="comment__section">
                <img className="comment__section--image" src="../Assets/Images/john_gibbons.jpg" />
                <div className="comment__section--info">    
                    <div className="comment__section--top">
                        <h4>{name}</h4>
                        <p>{timestamp}</p>
                    </div>
                    <div className="comment__section--bottom">
                        <p>{comment}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Comments;









/*
class Comments extends React.Component {

    state = {
        comment: {}
        // name: this.props.name
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();
        console.log('testingggg')
        
        let comment = this.commentForm.comment;
        let name = this.props.name;
        const videoId = this.props.match.params.videoId;

        let uploadData = {
            "name": name,
            "comment": comment.value
        }

        let options = {
            method: 'POST',
            body: JSON.stringify(uploadData), // changes the input values into json string
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch(`https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=9ad6e773-d2e2-47ab-9a5d-11d063cb25a0`, options)
        // fetch(`https://project-2-api.herokuapp.com/videos/comments?api_key=9ad6e773-d2e2-47ab-9a5d-11d063cb25a0`, options)
        .then(response => response.json())
        .then(commentData => {
        console.log(commentData);
        this.setState({
            videoUploaded: commentData})
        })
    }

    render() {
        
        const comments = this.props.comments;
        console.log('comments: ',comments)

        let commentItem = comments.map(comment => {
            return (
                <CommentItem name={comment.name}
                            comment={comment.comment}
                            id={comment.id}
                            timestamp={comment.timestamp} />
            )
        })

        return (
            <div className="comments">
                <form ref={form => (this.commentForm = form)} >
                    <input name="comment" className="comment__input--form" type="text" placeholder="Add a public comment"/>
                    <button onClick={this.onBtnClickHandler}>Comment</button>
                </form>

                {commentItem}
            </div>
        )
    }
}

export default Comments;


// set state as blakn []
// componentdidmount: fetch andget comment and set state
// to post it, make fn ()
// [...this.]

*/