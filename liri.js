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
       
        for (var i = 0; i < response.data.length; i++) {
            var date = moment(response.data[i].datetime);
        console.log(`
        Venue Name: ${response.data[i].venue.name}\n
        City: ${response.data[i].venue.city}\n
        Region: ${response.data[i].venue.region}\n
        Country: ${response.data[i].venue.country}\n
        Date: ${date.format("L")}\n
        \n------------------------------------------------------------\n\n`);
            }
        })};


function spotifyThis (userType) {
    console.log(userType);
    if (userInput === ("")) {
        (userType = "The Sign")
    }
spotify.search({ type: 'track', 
                query: userType, 
                limit: 1}, function(err, data) {
    if (err) {
      return console.log(err);
    }
  console.log(`
        Artists: ${data.tracks.items[0].album.artists[0].name}\n
        Song Name: ${data.tracks.items[0].name}\n
        Preview Link: ${data.tracks.items[0].preview_url}\n
        Album Name: ${data.tracks.items[0].album.name}`);
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
           Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}\n
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