/* Treehouse Full Stack Javascript Tech Degree - Project 1. A Random Quote Generator

This program is a random quote generator.

*/

//The quotes array stores 7 quotes as objects.

var quotes = [
  {
    quote: 'Success consists of going from failure to failure without loss of enthusiasm.',
    source: 'Winston Churchill',
    genre: 'Political quote'
  },
  {
    quote: 'Pleasure in the job puts perfection in the work.',
    source: 'Aristotle',
    genre: 'Philosophical quote'
  },
  {
    quote: 'Wise men speak because they have something to say; fools because they have to say something.',
    source: 'Plato',
    genre: 'Philosophical quote'
  },
  {
    quote: 'I not only use all the brains that I have, but all I can borrow.',
    source: 'Woodrow Wilson',
    genre: 'Political quote'
  },
  {
    quote: "Patience is a virtue, and I'm learning patience. It's a tough lesson.",
    source: 'Elon Musk',
    genre: 'Technology quote'
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    genre: 'Technology quote',
    citation: 'Twitter',
    year: '2016',
  },
  {
    quote: "I don't think that you can score as spectacular a goal as those of Zlatan in a video game - even though these games are very realistic these days.",
    source: 'Zlatan Ibrahimovic',
    genre: 'Sports quote'
  }
]

//The colors array is used for the background color change.

var colors = [
  'DodgerBlue',
  'LightCoral',
  'LightSkyBlue',
  'NavajoWhite',
  'Orange',
  'YellowGreen'
]

//The getRandomQuote function selects a random quote when executed.

function getRandomQuote(array) {
  var randomNumber = 0;
  randomNumber = Math.floor(Math.random() * quotes.length);
  if (randomNumber === 0) {
    return quotes[0];
  } else if (randomNumber === 1) {
    return quotes[1];
  } else if (randomNumber === 2) {
    return quotes[2];
  } else if (randomNumber === 3) {
    return quotes[3];
  } else if (randomNumber === 4) {
    return quotes[4];
  } else if (randomNumber === 5) {
    return quotes[5];
  } else if (randomNumber === 6) {
    return quotes[6];
  }
}

//The printQuote prints a quote from the getRandomQuote function.

function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  HTML = '';
  HTML += '<p class="quote">' + randomQuote.quote + '</p>';
  HTML += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation !== undefined) {
    HTML += '<span class="citation">' + randomQuote.citation + '</span>';    
  }
  if (randomQuote.year !== undefined) {
    HTML += '<span class="year">' + randomQuote.year + '</span>';
  }
  HTML += '<span class="genre">' + randomQuote.genre + '</span>';
  HTML += '</p>';
  document.getElementById("quote-box").innerHTML = HTML;
}

printQuote();

//The getRandomColor function selects a random color.

function getRandomColor(array) {
  randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

//The setBackgroundColor function sets a random background color when it executes the getRandomColor function with the color array as an argument.

function setBackgroundColor() {
  var generateColor = getRandomColor(colors);
  document.querySelector("body").style.background = generateColor;
}

setBackgroundColor();

//The window.setInterval determines how often the quote and background color changes.

var intervalID = window.setInterval(printQuote, 10000);
var intervalID = window.setInterval(setBackgroundColor, 10000);

//The following code load a new quote and background color when executed.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", setBackgroundColor, false);