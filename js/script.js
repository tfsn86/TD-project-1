/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
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

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

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

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

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

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.