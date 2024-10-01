const quoteContaienr=document.getElementById('quote-container');
const quoteText=document.getElementById('quote-text');
const authorText=document.getElementById('author-text');
const loader=document.getElementById('loader');
let data=[];

// 3 loading function
function showLoadingSpinner(){
    loader.hidden=false;
    quoteContaienr.hidden=true;
} 

function removeLoadingSpinner(){
    quoteContaienr.hidden=false;
    loader.hidden=true;
}

const getQuotes= async() =>{
    showLoadingSpinner();
    const res= await fetch("https://kiron-talukdar.github.io/Inspirational_Quotes_API/quotes.json");
    data=await res.json();
    newQuote();
}


// 2 show New Quote
function newQuote(){
    showLoadingSpinner();
    // pick a random quote from [data] array
    const quote=data[Math.floor(Math.random()*data.length)];
    // console.log(quote);
    // console.log(quote.quote);
    // console.log(quote.author);

    // used textContent, it has better performance because its value is not parsed as HTML
    // quoteText.textContent=quote.quote;
    authorText.textContent=quote.author;
    quoteText.textContent=quote.quote;

    if(!quote.author){
        quoteText.textContent='Unknown';
    }else{
        authorText.textContent=quote.author;
    }
    if(quoteText.length>100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote')
    }
    removeLoadingSpinner();

}
getQuotes()
