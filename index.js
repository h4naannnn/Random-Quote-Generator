const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".nwquote");
const copyBtn = document.querySelector(".cpybtn");

const quotes = [
    {
        quote:"Believe you can and you're halfway there.",
        author:"Theodore Roosevelt"
    },
    {
        quote:"Stay hungry. Stay foolish.",
        author:"Steve Jobs"
    },
    {
        quote:"Success is not final, failure is not fatal.",
        author:"Winston Churchill"
    },
    {
        quote:"Dream big and dare to fail.",
        author:"Norman Vaughan"
    },
    {
        quote:"The future depends on what you do today.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"The only way to do great work is to love what you do.",
        author:"Steve Jobs"
    },
    {
        quote:"Do what you can, with what you have, where you are.",
        author:"Theodore Roosevelt"
    }
];

function showRandomQuote() {
    quoteElement.classList.add("fade");
    authorElement.classList.add("fade");

    setTimeout(() => {
        
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.innerText =`"${randomQuote.quote}"`;
    authorElement.innerText =`- ${randomQuote.author}`;

        quoteElement.classList.remove("fade");
        authorElement.classList.remove("fade");
        

    }, 400);
}


showRandomQuote();
newQuoteBtn.addEventListener("click", showRandomQuote);
copyBtn.addEventListener("click", () => {

    const text = `${quoteElement.innerText}\n${authorElement.innerText}`;

    navigator.clipboard.writeText(text);

    copyBtn.innerText = "Copied!";

    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
    }, 2000);

});