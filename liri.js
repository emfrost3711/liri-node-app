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
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
          console.log(`data ${response.data[0].venue}`)
                  
});
// *  CANNOT FIGURE OUT HOW TO DIG INTO THE RESPONSE
    //  Venue Name: ${data.venue[0]}
// Date of the Event: ${data.datetime}`)concert-this` FUNCTION       Venue Location: ${}   Venue Name: ${response.data.venue}
// * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
// * Name of the venue
// * Venue location
// * Date of the Event (use moment to format this as "MM/DD/YYYY")


function spotifyThis () {
    console.log("spotify function");

spotify.search({ type: 'track', 
                query: userInput, 
                limit: 2}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(`data: ${data}
        Artists: ${data.tracks.items[0].artists[0].name}
        Song Name: ${data.tracks.items[0].name}
        Preview Link: ${data.tracks.items[0].preview_url}
        Album Name: ${data.tracks.items[0].album.name}`);

        console.log("items", data.tracks.items[0])

// * If no song is provided then your program will default to "The Sign" by Ace of Base.

  }) 
}
//    * `spotify-this-song` FUNCTION//still need the default to "The sign" if it doesn't work
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

function doWhatItSays () {
    console.log("doWhatItSays function");
    fs.readFile("random.txt", "utf8", function(err, data) {
        // If there's an error reading the file, we log it and return immediately
        if (err) {
          return console.log(err);
        }
    
}};
//    * `do-what-it-says`