const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

/*
Get Quotes from API: 
An asynchronous function can run at any time independently and it won't stop the browser from completing the loading of a page. 

let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
    
    }
}
getQuotes();
*/

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true; 
}

// Show New Quote From local Storage instead of API
function newQuote() {
    showLoadingSpinner(); 
    // Pick a Random quote from localQuotes Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check if author field is blank and replace it with "Unknown" 
    if (!quote.author) {
        authorText.textContent = "Unknown"; 
    }   else {
        authorText.textContent = quote.author; 
    }
    // Check the quote length to determin font size styling
    if (quote.text.length > 80) {
        quoteText.classList.add("long-quote");
    }   else {
        quoteText.classList.remove("long-quote");
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text; 
    removeLoadingSpinner(); 
}


// Post quote on X.com
function postQuote() {
    const xUrl = `https://x.com/intent/post?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(xUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', postQuote);

newQuote();