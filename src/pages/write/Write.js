import './write.css'

function Write() {
    return (
        <div className="write">
            <img src="images/vacation1.jpg" alt="writeImage" className="writeImage" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" className="fileInput" style={{ display: 'none' }} />
                    <input type="text"
                        placeholder="Title"
                        autoFocus={true}
                        className="writeInput"
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea cols="30" rows="10"
                        className="writeInput writeText"
                        type="text"
                        placeholder="Tell your story here!"></textarea>
                </div>
                <button type="submit" className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write
