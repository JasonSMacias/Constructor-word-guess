var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var targetWordList = ["Williamsburg", "Tumblr", "gastropub", "mumblecore", "fashion", "brunch", "vinyl", "tousled", "dreamcatcher", "letterpress", "distillery", "keffiyeh", "banjo", "Kickstarter", "asymmetrical", "denim", "messenger", "fingerstache", "Schlitz", "readymade", "YOLO", "bitters", "aesthetic", "typewriter", "flexitarian", "selfies", "sustainable", "Bushwick", "mixtape", "artisan", "wayfarers", "normcore", "meggings", "salvia", "Pinterest", "skateboard", "Etsy", "hashtag", "retro", "iPhone", "sriracha", "forage", "polaroid", "organic", "locavore", "keytar", "plaid", "authentic", "mustache", "ennui", "quinoa", "umami", "biodiesel", "ugh", "disrupt", "meh", "Banksy", "Pitchfork", "Helvetica", "cliche", "sartorial", "irony", "squid", "actually", "Brooklyn", "gentrify", "Austin", "twee", "DIY", "semiotics", "kitsch", "bespoke", "pickled", "cred", "viral", "Portland", "heirloom", "freegan", "seitan", "hoodie", "whatever", "cardigan", "Thundercats", "PBR", "literally", "pug", "leggings", "scenester", "tofu", "beard", "paleo", "ethical", "chia", "tattooed", "Vice"];

// setting up inquirer
var inquirer = require('inquirer');
// setting variables
  let lettersGuessed = [];
  let guessesRemaining = 9;
  let wins = 0;
  let hasLost = false;
  let hasWon = false;
  let hasQuit = false;
  let targetWord = "";
  let targetWordLetters = [];
  let continuePlay = true;

  const createTargetWord = function(){
  targetWord = targetWordList[Math.floor(Math.random() * targetWordList.length)];
  targetWordLetters = [];
  console.log("Target Word: "+targetWord);
  for (i=0; i<targetWord.length; i++) {
    targetWordLetters.push(targetWord[i]);
  };
  console.log(targetWordLetters);
  };

  createTargetWord();

const quitPrompt = function(){
  guessesRemaining = 9;
  inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "confirm",
      message: "Do you want to continue?",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {

    if (inquirerResponse.confirm) {
      console.log("Starting new Round!");
      createTargetWord();
      startPlay();
    }
    else {
      continuePlay = false;
      console.log("Thanks for playing! You had " + wins + " wins.");
      process.exit(0);
    }
  }).catch(function(error) {
  console.log(error);
  });
};

const startPlay = function(){
  let count = 0;
  let validGuesses = alphabet;

  inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "Choose a letter.",
      name: "letter",
      choices: validGuesses
    }
  ]).then(function(inquirerResponse) {
    let letter = inquirerResponse;
  console.log(inquirerResponse.letter);

  guessesRemaining--;
  
  if (guessesRemaining=0){
    console.log("Sorry, you didn't get that one.  The word was " + targetWord);
    quitPrompt();
  };
  });
};

startPlay();