//e3ad0a74 OMDB API

var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
require("dotenv").config();
var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var userInput = process.argv.slice(3); 

console.log("command is" + command);
console.log("userInput is" + userInput);



switch (command) { 
    case "concert-this":
    concertThis();
    break; 

    case"spotify-this":
    spotifyThis ();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;
    default: 
    console.log("Please give a valid entry.")
}

function concertThis () {
    console.log("concert function");
}
// * `concert-this` FUNCTION
function spotifyThis () {
    console.log("spotify function");

spotify.search({ type: 'track', 
                query: userInput, 
                limit: 2}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log("Artists:" + data.tracks.items[0].artists[0].name); 
  console.log("Preview Link:" + data.tracks.items[0].preview_url); 
  });
}
//    * `spotify-this-song` FUNCTION
function movieThis () {
    console.log("movie function");
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
          console.log(`Movie Title: ${response.data.Title} 
           Movie Year: ${response.data.Year}
           IMDB Rating: ${response.data.imdbRating}
           Rotten: ${response.data.Ratings[1].Value}
           Country produced: ${response.data.Country}
           Language: ${response.data.Language}
           Plot: ${response.data.Plot}
           Actors ${response.data.Actors}`);
      })
}
//    * `movie-this` FUNCTION
function doWhatItSays () {
    console.log("doWhatItSays function");
    
}
//    * `do-what-it-says`