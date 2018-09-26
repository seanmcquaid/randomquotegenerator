// Declare array of quotes that won't change
const quotes = [
  "“You know what gets my dick hard? Helping out my friends.” — Derek", 
  "“You and your mom are hillbillies. This is a house of learned doctors.” — Dale", 
  "“Dad, what are you doing? It’s ‘Shark Week’!” — Dale”", 
  "“Brennan, that is the voice of an angel. Brennan I can’t even make eye contact with you right now. Your voice is like a combination of Fergie and Jesus.” — Dale", 
  "“Did we just become best friends?” — Brennan"];
  
  // create variable with equation for random number
  
  let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // create on click listener that generates new quote everytime 
  
  $(document).ready(function() {
    $("#quote-button").on("click", function(){
        console.log(newQuote);
    });
    });