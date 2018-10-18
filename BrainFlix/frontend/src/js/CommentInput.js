import React from 'react';

class CommentInput extends React.Component {
    state = {
        name: "Janet",
        comment: ""
    }

    // onNameChange = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    onCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const inputInfo = {
            name: this.state.name,
            comment: this.state.comment
        };
        this.props.postNewComment(inputInfo);
    }

    // this function clears whatever was inputed 
    // in the comment input form 
    clearInput = (e) => {
        e.preventDefault();
        this.setState({
            comment: this.commentForm.comment.value = ""
        })
        
    }

    render() {
        // const {onSubmit} = this.props;
        return (
            <div className="comments__input">
                <img className="comment__section--image" src="../Assets/Images/john_gibbons.jpg" />
                <form ref={form => (this.commentForm = form)} onSubmit={this.onSubmit} className="comments__input--content">
                    
                    {/* <input value={this.state.name}
                            onChange={this.onNameChange} 
                            name="name" 
                            className="comment__input--form" 
                            type="text" 
                            placeholder="name"/> */}
                    <input value={this.state.comment} 
                            onChange={this.onCommentChange} 
                            name="comment" 
                            className="comment__input--form" 
                            type="text" 
                            placeholder="Add a public comment" />
                    <div className="comments__input--buttons">
                        <button onClick={this.clearInput} className="cancel__button">Cancel</button>
                        <button className="comment__button">Comment</button>
                    </div>

                </form>

            </div>
        )
    }    


}

export default CommentInput;



/*

  deleteComment = (e) => {
        e.preventDefault();
    }

    render() {
        // const {onSubmit} = this.props;
        return (
            <div className="comments__input">
                <form 
                    ref={form => (this.commentForm = form)} >
                    <input value={this.state.name}
                            onChange={this.onNameChange} 
                            name="name" 
                            className="comment__input--form" 
                            type="text" 
                            placeholder="name"/>
                    <input value={this.state.comment} 
                            onChange={this.onCommentChange} 
                            name="comment" 
                            className="comment__input--form" 
                            type="text" 
                            placeholder="Add a public comment" />
                    <button onSubmit={this.onSubmit} className="postComment__btn">Comment</button>
                    <button deleteComment={this.deleteComment} className="deleteComment__btn">Cancel</button>
                </form>

            </div>


*/