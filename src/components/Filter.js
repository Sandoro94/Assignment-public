import React from "react"

function Filter(props) {
    return(
        <div className="song-filter">
            <form>
                <select className="filter-box" name="genre-filter" onChange={props.FilterGenre}>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <select className="filter-box" name="rating-filter" onChange={props.FilterRating}>
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