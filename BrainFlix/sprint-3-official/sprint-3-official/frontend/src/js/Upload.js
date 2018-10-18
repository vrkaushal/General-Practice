import React from 'react';

class Upload extends React.Component {
    
    state = {
        videoUploaded: false // false because no video has been uploaded
    }

    upload = (e) => {
        e.preventDefault();
        // this targets the uploadForm inputs
        let title = this.uploadForm.title;
        let description = this.uploadForm.description;
        
        // this gets the values of the inputs 
        // and stores it in a variable called uploadData
        let uploadData = {
            "title": title.value,
            "description": description.value
        }

        // this is to prepare for fetch POST request
        let options = {
            method: 'POST',
            body: JSON.stringify(uploadData), // changes the input values into json string
            headers: {
                'content-type': 'application/json'
            }
        }
        // this is the fetch POST request
        fetch('http://localhost:3001/videos', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                videoUploaded: true},
                () => this.props.history.push(`/videos/${data.id}`) //this changes the url back to the homepage once video "uploads"
            )
        })
    }

    render() {
        return (
            <div className="upload__video--content">
                {/* thumbnail preview */}
                <div className="upload__video--thumbnail">
                    <img className="upload__video--thumbnail" src="../Assets/Images/donaldson.jpg" />
                    <h4>Uploading Status:</h4>
                    <p>Processing</p>
                </div>

                {/* upload video form */}
                <div className="upload__form">
                    <div className="upload__form--progressBar"></div>
                    <div className="progressBar__status">
                        <h5>Processing 80%</h5>
                        <p><span>*</span> Click “Publish” to make your video live.</p>
                    </div>
                    <h4>Basic Information</h4>
                    <form className="upload__form--content" ref={form => (this.uploadForm = form)}>
                        <label htmlFor="title">Title:</label>
                        <input className="upload__video--title" type="text" name="title" placeholder="Add a title to your video" />
                        <label htmlFor="description">Description</label>
                        <textarea className="upload__video--description" type="text" name="description" placeholder="Add a description of your video" />
                        <label htmlFor="tags">Tags:</label>
                        <input className="upload__video--tags" type="text" name="tags" placeholder="(e.g., albert einstein, flying pig, mashup, videos)" />
                    </form>
                </div>

                <div className="upload__video--button">
                    <button className="upload__button" onClick={this.upload} >Publish</button>
                </div>

            </div>
        )
    }
}

export default Upload;