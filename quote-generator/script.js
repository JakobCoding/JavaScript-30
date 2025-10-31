// Get Quotes from API
// An asynchronous function can run at any time independently and it won't stop the browser from completing the loading of a page. 

let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    }catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();
