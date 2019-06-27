//e3ad0a74 OMDB API

var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");

require("dotenv").config();

var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var userInput = process.argv.slice(3); 
var fs = require("fs");

function switchCommand (demand, userType) {
switch (command) { 
    case "concert-this":
    concertThis(demand, userType);
    break; 

    case "spotify-this":
    spotifyThis (demand, userType);
    break;

    case "movie-this":
    movieThis(demand, userType);
    break;

    case "do-what-it-says":
    doWhatItSays(demand, userType);
    break;
    default: 
    console.log("Please give a valid entry.")
}}

function concertThis () {
    console.log("concert function");
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
        //   console.log(response.data[0].venue)
        console.log("items", data.tracks.items[0])
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                console.log(`Venue Name: $(response.data[i].venue.name)`)
            }
})};


// var i;
// for (i = 0; i < cars.length; i++) { 
//   text += cars[i] + "<br>";
// }
// *  //use a for loop to dig into the array response CANNOT FIGURE OUT HOW TO DIG INTO THE RESPONSE
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
   
  console.log(`
        Artists: ${data.tracks.items[0].artists[0].name}\n
        Song Name: ${data.tracks.items[0].name}\n
        Preview Link: ${data.tracks.items[0].preview_url}\n
        Album Name: ${data.tracks.items[0].album.name}`);

        // console.log("items", data.tracks.items[0])

// * If no song is provided then your program will default to "The Sign" by Ace of Base.
  }) 
}
//    * `spotify-this-song` FUNCTION//still need the default to "The sign" if it doesn't work


function movieThis () {
    console.log("movie function");
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
          console.log(`Movie Title: ${response.data.Title}\n
           Movie Year: ${response.data.Year}\n
           IMDB Rating: ${response.data.imdbRating}\n
           Rotten: ${response.data.Ratings[1].Value}\n
           Country produced: ${response.data.Country}\n
           Language: ${response.data.Language}\n
           Plot: ${response.data.Plot}\n
           Actors ${response.data.Actors}`);
      })
}

function doWhatItSays () {
    console.log("doWhatItSays function");
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }  
        console.log(data);
        console.log(typeofdata);
})};