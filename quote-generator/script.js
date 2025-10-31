// Get Quotes from API
// An asynchronous function can run at any time independently and it won't stop the browser from completing the loading of a page. 

// let apiQuotes = [];


// Show New Quote
function newQuote() {
    // Pick a Random quote from localQuotes Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

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