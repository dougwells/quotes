$(document).ready(function() {

  //Download new quote & image URL from json datafile stored in my dropbox
  //Replaces existing quote and image on webpage
  // $(".newQuote").click(function(){
  //   $.ajax({
  //     url: 'https://dl.dropboxusercontent.com/s/p5zx9nv7qpyexnc/quotes.json',
  //     dataType: 'json',
  //     success: function(data) {
  //       var i = Math.floor(Math.random() * (data.length));
  //       var imageUrl = data[i].imageUrl;
  //       var author = data[i].author;
  //       var steveQuote = data[i].quote;
  //
  //       $(".quote").text("'"+steveQuote+"'");
  //       $(".author").text("'"+steveQuote+"'");
  //       $('.quote-image').attr("src", imageUrl)
  //       console.log(steveQuote);
  //       console.log(imageUrl);
  //       console.log(i);
  //     },
  //     error: function(err) {
  //       var steveQuote = "This app is shit!  You have an error. Error Message: "+ err;
  //       $(".quote").text(steveQuote);
  //       $(".author").text("Steve Jobs");
  //       console.log(steveQuote);
  //     }
  //   });
  // });
});
