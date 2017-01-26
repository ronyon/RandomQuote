/*
Random Quote Generator
Malia Waddell
*/

var url ="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

var tweetText = "";
var quote = "";
var author = "";

function success(data){
  // Save data into vars to change later with new quote button.
  quote = data.quoteText;
  if (data.quoteAuthor !== ""){
    author = data.quoteAuthor;
  } else {
    author = "Unknown";
  }
  
  
  // Publish
  $("#quote-text").text(quote);
  $("#quote-author").text('- ' + author);
  
  // Save data to use if tweet button pushed.
  tweetText = quote + "- " + author;
};

$(document).ready(function() {
    $.getJSON(url, success).error(function(){
        console.log('error');
        });

    $("#tweet-quote").on("click", function(){
      let urlTweet = "https://twitter.com/intent/tweet?text=" + tweetText + "";
      $("#tweet-quote").attr("href", urlTweet);
    });
    $("#new-quote").on("click", function(){
      $.getJSON(url, success);

    });
});