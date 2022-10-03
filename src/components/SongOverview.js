import React from "react";
import SongForm from "./SongForm"
import SongList from "./SongList"
import Filter from "./Filter"

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state = {
            songs: [
                {
                    title: "Under the Bridge",
                    artist: "Red Hot Chili Peppers",
                    genre: "Funk Rock",
                    rating: "5 Stars"
                },
                {
                    title: "Careless Whisper",
                    artist: "George Michael",
                    genre: "Pop",
                    rating: "4 Stars"
                },
                {
                    title: "Fly Me To the Moon",
                    artist: "Frank Sinatra",
                    genre: "Jazz",
                    rating: "4 Stars"
                },
                {
                    title: "Purple, Yellow, Red & Blue",
                    artist: "Portugal. the Man",
                    genre: "Psychedelic",
                    rating: "5 Stars"
                },
                {
                    title: "Sunshine",
                    artist: "Raul Midón",
                    genre: "Singer/Songwriter",
                    rating: "4 Stars"
                },
                {
                    title: "Clocks",
                    artist: "Coldplay",
                    genre: "Pop",
                    rating: "3 Stars"
                },
                {
                    title: "Wonderwall",
                    artist: "Oasis",
                    genre: "Rock",
                    rating: "2 Stars"
                }
            ],
            

        }
    }

    addSong = (song) => {
        this.setState({
            songs: [
                ...this.state.songs,{
                    id: song.id,
                    title: song.title,
                    artist: song.artist,
                    genre: song.genre,
                    rating: song.rating
                }
            ]
        })
   }
    deleteSong = (id) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const newList = songs.filter((song, index) => index !==id)
            return {
                songs: newList
            }
        })
    }

    FilterGenre = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const genre = event.target.value
            const filteredList = songs.filter((song) => song.genre === genre)
            return {
                songs: filteredList
            }
        })
    }

    

    

    FilterRating = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const rating = event.target.value
            const filteredList = songs.filter((song) => song.genre === rating)
            return {
                songs: filteredList
            }
        })
    }

  render() {
    return (
        <div className="overview">
            <SongForm onSubmit={this.addSong}/>
            <Filter 
              songs={this.state.songs}
              FilterGenre={this.genre}
              FilterRating={this.rating}
            />
            <table className="song-table">
                <tbody>
                    <tr className="song-header">  
                        <th className="Song">Song</th>
                        <th className="Artist">Artist</th>
                        <th className="Genre">Genre</th>
                        <th className="Rating">Rating</th>
                    </tr>
                </tbody>
            
                <SongList 
                    className="song-list"
                    songs={this.state.songs}
                    handleClick={this.deleteSong}
                />
            </table>
      </div>
    );
  }
}

export default SongOverview;