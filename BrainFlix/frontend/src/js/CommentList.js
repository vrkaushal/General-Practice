import React from 'react';
import Comments from './Comments';
import {convertTime} from './utility';

class CommentList extends React.Component {
    render() {
        // maps the comments array
        let commentsJSX = this.props.comments.map(comment => {
            return (<Comments name={comment.name} 
                                comment={comment.comment}
                                timestamp={convertTime(comment.timestamp)}
                                key={comment.id} />
                    )
            })

        // reverses the comments array 
        // this allows the most recent comment to appear at the top of the comments
        let commentsByTime = [...commentsJSX].reverse()

        return (
            <div>
                {commentsByTime}
            </div>
        )
    }
}

export default CommentList;