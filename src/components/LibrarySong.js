import React from 'react'

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {

  const songSelectHandler = async () => {
    //
    await setCurrentSong(song);
    //Add active State
    //use map() to return a new copy of the song array that contains only one song with active set to true
    //pass that array into the setSongs function, which is setState of the songs data
    const newSongs = songs.map((song) => { 
      if(song.id === id){
        return{
          ...song,
          active: true,
        }
      }else{
        return{
          ...song,
          active: false,
        }
      }
    });
    await setSongs(newSongs);

    if(isPlaying) audioRef.current.play();
  }


  return (
    //holy crap this is cool. video 16 about 1:00 minute in
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h3>{song.artist}</h3>
      </div>
    </div>
  )
}

export default LibrarySong
