
  // request a new dish and alert the user
  
  $('#get-dish').on('click', function(event) {
    event.preventDefault();

    var request = $.ajax({
      method: "GET",
      url: "/dishes/random.json"
      });

    request.done(function(dish){
      alert('Your random dish is:' + dish["dish"]);
    });
});
