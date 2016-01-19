$(document).ready(function() {

  // //Center images by dynamically changing margins
  // var conHeight = $(".homeImageImage").height();
  // var imgHeight = $(".homeImageImage img").height();
  // var gap = (imgHeight - conHeight)/2;
  // $(".homeImageImage img").css("margin-top",-gap);

  //Download new quote & image URL from json datafile stored in my dropbox
  //Replaces existing quote and image on webpage
  $("button").click(function(){
    $.ajax({
      url: 'https://dl.dropboxusercontent.com/s/p5zx9nv7qpyexnc/quotes.json',
      dataType: 'json',
      success: function(data) {
        var i = Math.floor(Math.random() * (data.length));
        var steveQuote = data[i].quote;
        var imageUrl = data[i].imageUrl;
        $("em").text("'"+steveQuote+"'");
        $('img').attr("src", imageUrl)
        console.log(steveQuote);
        console.log(imageUrl);
        console.log(i);
      },
      error: function(err) {
        var steveQuote = "This app is shit!  You have an error. Error Message: "+ err;
        $("em").text(steveQuote);
        console.log(steveQuote);
      }
    });
  });
});
