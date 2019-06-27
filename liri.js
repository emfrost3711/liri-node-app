//e3ad0a74 OMDB API

var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
require("dotenv").config();

var keys = require("./keys.js")
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var userInput = process.argv.slice(3).join("+"); 


function switchCommand (demand, userType) {
switch (demand) { 
    case "concert-this":
    concertThis(userType);
    break; 

    case "spotify-this":
    spotifyThis(userType);
    break;

    case "movie-this":
    movieThis(userType);
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;
    default: 
    console.log("Please give a valid entry.")
}}

function concertThis (userType) {
    console.log("concert function");
    var queryUrl = "https://rest.bandsintown.com/artists/" + userType + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response) {
        //   console.log(response.data[0].venue)
        console.log("items", data.tracks.items[0])
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                console.log(`Venue Name: $(response.data[i].venue.name)`)
            }
})};

// *  //use a for loop to dig into the array response CANNOT FIGURE OUT HOW TO DIG INTO THE RESPONSE
    //  Venue Name: ${data.venue[0]}
// Date of the Event: ${data.datetime}`)concert-this` FUNCTION       Venue Location: ${}   Venue Name: ${response.data.venue}

// * Name of the venue
// * Venue location
// * Date of the Event (use moment to format this as "MM/DD/YYYY")


function spotifyThis (userType) {
    console.log(userType);
    if (userInput === ("")) {
        (userType = "The Sign")
    }
spotify.search({ type: 'track', 
                query: userType, 
                limit: 2}, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("items", data.tracks.items[0])
        console.log(typeof data);
//   console.log(`
//         Artists: ${data.tracks.items[0].artists[0].name}\n
//         Song Name: ${data.tracks.items[0].name}\n
//         Preview Link: ${data.tracks.items[0].preview_url}\n
//         Album Name: ${data.tracks.items[0].album.name}`);

// * If no song is provided then your program will default to "The Sign" by Ace of Base.
  }) 
}



function movieThis (userType) {
    console.log(userType);
    if (userInput === ("")) {
        (userType = "Mr. Nobody")
    } 
    var queryUrl = "http://www.omdbapi.com/?t=" + userType + "&y=&plot=short&apikey=trilogy";
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
        console.log(typeof data);
})};

switchCommand(command, userInput);