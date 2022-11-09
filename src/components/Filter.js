import React from "react"

function Filter(props) {
    return(
        <div className="song-filter">
            <form>
                <select className="filter-box" defaultValue="default" name="genre-filter" onChange={props.FilterGenre}>
                    <option value="default" disabled hidden>
                        Filter by genre
                    </option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                    <option value="Hiphop">Hiphop</option>
                    <option value="Folk">Folk</option>
                </select>
                <select className="filter-box" defaultValue="default" name="rating-filter" onChange={props.FilterRating}>
                    <option value="default" disabled hidden>
                        Filter by rating
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
        </div>
    )
}

export default Filter