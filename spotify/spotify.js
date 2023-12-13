function createCollection(stringName, stringDescription, arrayTracks = []) {
  let collection = {
    name: stringName,
    description: stringDescription,
    tracks: arrayTracks
  };
  return collection;
}

function createTrack(stringTitle = "unknown", stringArtist = "unknown", numDuration = 0) {
  let track = {
    title: stringTitle,
    artist: stringArtist,
    duration: numDuration
  }
  return track;
}

function reviewTrack(objectTrack) {
  if(objectTrack.artist === "Red Hot Chili Peppers") {
    return `The song ${objectTrack.title} rules!`;
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`
  }
}

function addTrack(objectColletion, objectTrack) {
  objectColletion.tracks.push(objectTrack);
  return objectColletion;
}

function getTotalDuration(objectColletion) {
  let totalDuration = 0;
  for(let i = 0 ; i < objectColletion.tracks.length; i ++) {
    totalDuration += objectColletion.tracks[i].duration;
  }
  return totalDuration;
}

function findTracksByArtist(objectColletion, stringArtist) {
  let searchArtists = [];
  for(let i = 0; i < objectColletion.tracks.length; i++) {
    if(objectColletion.tracks[i].artist === stringArtist) {
      searchArtists.push(objectColletion.tracks[i]);
    }
  }
  return searchArtists;
}

module.exports = { 
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist
};