import React from "react"
import Song from "./Song"

function SongList(props) {
    const songs = props.songs;
    const list = songs.map((song, index) => {
        return (
            <Song
                key= {index}
                id= {index}
                title = {song.title}
                artist = {song.artist}
                genre={song.genre}
                rating = {song.rating}
                handleClick = {props.handleClick}
            />
        )
    })

    return <tbody>{list}</tbody>
}
export default SongList