$(document).ready(function() {

  //Download new quote & image URL from json datafile stored in my dropbox
  //Replaces existing quote and image on webpage
  $("#newQuote").click(function(){
    $.ajax({
      url: 'https://dl.dropboxusercontent.com/s/p5zx9nv7qpyexnc/quotes.json',
      dataType: 'json',
      success: function(data) {
        var i = Math.floor(Math.random() * (data.length));
        var steveQuote = data[i].quote;
        var author = data[i].author;
        var imageUrl = data[i].imageUrl;
        var imageColor = data[i].imageColor;
        $(".quote").text("'"+steveQuote+"'");
        $('.quote-image').attr("src", imageUrl);
        $('.author').text('Author: '+author);
        console.log(steveQuote);
        console.log(imageUrl);
        console.log(imageColor);
      },
      error: function(err) {
        var steveQuote = "This app is shit!  You have an error. Error Message: "+ err;
        var author = "Steve Jobs"
        var imageUrl = "https://dl.dropboxusercontent.com/s/5ris4qilrskw5mr/sucks.jpg"
        $(".quote").text("'"+steveQuote+"'");
        $('.quote-image').attr("src", imageUrl);
        $('.author').text('Author: '+author);
        console.log(steveQuote);
      }
    });
  });
});
