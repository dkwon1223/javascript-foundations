/*
Requirements: 
- Inputs: string, string, and boolean
- Outputs: object

Pseudocode:
- DEFINE FUNCTION: createSong() with PARAMETERS: stringTitle, stringArtist, booleanFavorite, booleanPlayed = false
- INITIALIZE OBJECT VARIABLE: song with KEY VALUE PAIRS:
  - name: stringTitle
  - artist: stringArtist
  - favorite: booleanFavorite
  - hasBeenPlayed: booleanPlayed
- RETURN song
*/

function createSong(stringTitle, stringArtist, booleanFavorite = false, booleanPlayed = false) {
  return {
    name: stringTitle,
    artist: stringArtist,
    favorite: booleanFavorite,
    hasBeenPlayed: booleanPlayed
  };
}

function playSong(songObject) {
  songObject.hasBeenPlayed = true;
  return songObject;
}

function makePlaylist(stringName, arraySongs) {
  return {
    name: stringName,
    songs: arraySongs
  };
}

function addSongToPlaylist(objectPlaylist, objectSong) {
  objectPlaylist.songs.push(objectSong);
  return objectPlaylist;
}

function playSongs(objectPlaylist, stringFavorites) {
  if(stringFavorites === "favorites only") {
    for(let i = 0; i < objectPlaylist.songs.length; i++) {
      if(objectPlaylist.songs[i].favorite) {
        playSong(objectPlaylist.songs[i]);
      }
    }
    return objectPlaylist;
  } else {
    for(let i = 0; i < objectPlaylist.songs.length; i++) {
      playSong(objectPlaylist.songs[i]);
    }
    return objectPlaylist;
  }
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
