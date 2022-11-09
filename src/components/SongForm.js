import React from "react";

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: ""
        }
    }

    render() {
        const addTitle = (event) => {
            this.setState({
                title: event.target.value
            })
        }

        const addArtist = (event) => {
            this.setState({
                artist: event.target.value
            })
        }
        const addGenre = (event) => {
            this.setState({
                genre: event.target.value
            })
        }
        const addRating = (event) => {
            this.setState({
                rating: event.target.value
            })
        }
        const onSubmit = (event) => {
            event.preventDefault();
            this.props.onSubmit(this.state)
        }

        return (
            <div className="add-song-form">
                <h2>You can add a song to the list here:</h2>
                <form onSubmit={onSubmit}>
                    <input 
                        className = "form-item"
                        placeholder = "song title"
                        type = "text"
                        onInput = {addTitle}
                    />

                    <input 
                        className = "form-item"
                        placeholder = "artist"
                        type = "text"
                        onInput = {addArtist}
                    />

                    <input 
                        className = "form-item"
                        placeholder = "genre"
                        type = "text"
                        onInput = {addGenre}
                    />

                    <select
                        className = "form-item"
                        defaultValue = "default"
                        name = "rating"
                        onChange = {addRating}
                    >
                        <option value="default" disabled hidden>
                            {this.state.rating}
                        </option>
                        <option value = "1 star">1 star</option>
                        <option value = "2 stars">2 stars</option>
                        <option value = "3 stars">3 stars</option>
                        <option value = "4 stars">4 stars</option>
                        <option value = "5 stars">5 stars</option>
                    </select>

                    <input 
                        className="addInput" type="submit" value="Add"> 
                        
                    </input>
                </form>
            </div>
        )
    }
}

export default SongForm