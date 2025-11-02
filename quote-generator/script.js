const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


// Get Quotes from API
// An asynchronous function can run at any time independently and it won't stop the browser from completing the loading of a page. 

// let apiQuotes = [];


// Show New Quote
function newQuote() {
    // Pick a Random quote from localQuotes Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if author field is blank and replace it with quote unknown
    // if statement shows if there is NO !quote.author to show "unkown" on the app underneath the quote.  
    if (!quote.author) {
        authorText.textContent = "Unknown"; 
    }   else {
        authorText.textContent = quote.author; 
    }
    // Check the quote length to determin the sytling 
    if (quote.text.length > 80) {
        quoteText.classList.add("long-quote");
    }   else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text; 
}


// Post quote on X
function postQuote() {
    const xUrl = `https://x.com/intent/post?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(xUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', postQuote);

// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//         // console.log(apiQuotes[12]); picks 1 specific quote, we want random quotes generated every button click from array[]
//     }catch (error) {
//         // Catch Error Here
//     }
// }

// On Load
// getQuotes();
newQuote();

// There is an alternative option for this project that does not require an API key - https://zenquotes.io/

   // Sample Requests
   // https://zenquotes.io/api/quotes - Generate a JSON array of 50 random quotes on each request
     
   // https://zenquotes.io/api/today - Generate the quote of the day on each request
     
   // https://zenquotes.io/api/random - Generate a random quote on each request


