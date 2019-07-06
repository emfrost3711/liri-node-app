### LIRI BOT ###

The Liri Bot is your best friend when it comes to quickly garnering information about your favorite artists' upcoming shows, retrieving data from spotify, or getting the skinny on your favorite movies. 

Liri utilizes a switch case and then either axios calls or the built-in call documentation for three different APIs. A fourth function, do-what-it-says, pulls data stored in the random.txt file to, well, do what it says. 

Here's how to use Liri. 

  - When you open the file, you'll need to be sure you have a few requirements installed. Check all of the required elements stored in variables at the start of the code. Alternatively, you can view the dependencies in the pacakge.json file. 
  - Before every call for information, use "node liri.js", then enter the command followed by the search terms. For example, in your terminal/bash, type "node liri.js concert-this lizzo". And then see when she's coming to your town and buy tickets immediately because Lizzo live is lifechanging. 
  - The commands you can choose from include: `spotify-this`, `movie-this`, `concert-this`, and `do-what-it-says`. Try them out and see which results you get!
  

Shout out and thanks to the following websites for making this digital friend's existence possible: [node Spotify API](https://www.npmjs.com/package/node-spotify-api), [OMDB API](http://www.omdbapi.com), and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api).

Here is a video displaying Liri's functionality: ![Liri Demo](https://i.imgur.com/XoxeJlN.gifv)

This project was built-out and is maintained by [Emily Grace Frost](https://github.com/emfrost3711) with support from the fabulous TAs of the UDEN201904FSF2-Women coding bootcamp. 