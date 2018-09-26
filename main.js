// Declare array of quotes that won't change
const quotes = [
  "“You know what gets my dick hard? Helping out my friends.” — Derek", 
  "“You and your mom are hillbillies. This is a house of learned doctors.” — Dale", 
  "“Dad, what are you doing? It’s ‘Shark Week’!” — Dale”", 
  "“Brennan, that is the voice of an angel. Brennan I can’t even make eye contact with you right now. Your voice is like a combination of Fergie and Jesus.” — Dale", 
  "“Did we just become best friends?” — Brennan"];
  
  // create on click listener that generates a new quote each time it is clicked
  
  $(document).ready(function() {
    $("#quote-button").on("click", function quoteGenerator(){

  // declare variable that has equation for random number to generate newQuote from array

    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // replace text in #quote with newQuote
     return $("#quote").text(newQuote);
     
    });
    });