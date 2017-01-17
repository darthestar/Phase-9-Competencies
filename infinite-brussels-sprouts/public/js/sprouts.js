// YOUR CODE GOES HERE
$(".more-sprouts").on('click', function (event){
  event.preventDefault();

    var more_url = $('a').attr('href');
  // "/tweets?page=2"
  // take the above string and cut out everything except the number part;
    var url = more_url.substring(0, more_url.length - 1);
    var page = more_url.split('=')[1];


    var request = $.ajax({
        method: "GET",
        url: "/tweets.json?page=" + page
    });
    page += 1;

    request.done(function(data) {

      data.forEach(function(tweet) {
       var lineBegin = "<li class='tweet'>";
       var lineEnd = "</li>";
       var body = "<div class='body'>" + tweet["text"] + "</div>";
       var username = "<div class='user'>" + tweet["username"] + "</div>";
       $(".tweets").append(lineBegin + body + username + lineEnd);
      });
    });
  });
  // alert("request is done! Yay!!!");


  // Make an AJAX request to get more Tweets (using that number you found earlier as the page)
  // With that information,
    // Add content to the page with the tweets' text
