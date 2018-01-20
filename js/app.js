$(document).ready(function() {

  var results = $("#resultlist");


  var toggleButton = $('#toggleButton');
  toggleButton.on("click", function() { //onClick event with callback function(each time when buttion is clicked this function will be execute.)

    results.toggle(500); //toggle()--> when content is shown it hide and visa work like .show() and .hide(), and 500 is an animation time.
    if (toggleButton.text() == "Hide Course") {
      toggleButton.text("Show Course");
    } else {
      toggleButton.text("Hide Course");
    }
  });

  var resultObj = []; //data(array of objet) from server comes here when submit button is clicked.

  function displayResult(resultObj) { //display the data of resultObj.

    results.empty();
    $.each(resultObj, function(i, item) { //foreach loop.

      var newResuls = $("<div id='newResulsID'>" + //wrapping of HTML element.
        "<div class='title'>" + item.title + "</div>" +
        "<div>" + "Instrctor: " + item.instrctor + "</div>" +
        "<div>" + "level: " + item.level + "</div>" +
        "</div>")

      results.append(newResuls);

      newResuls.hover(function() { //styling hover(mouse-in(function1), mouse-out(function2));

        $(this).css("background-color", "gray"); //'this' reffers the current object.
        $(this).css("color", "blue");
      }, function() {
        $(this).css("background-color", "transparent");
        $(this).css("color", "#007FC0");
      })
    });
  }


  $('#loginForm').on('submit', {}, function() {
    var username = $('#username').val();
    var password = $('#password').val();

    if (username && password) {
      $.post('/api/login', function(data) {
        console.log('success', data);
        displayResult(data);
        $('#loginForm').hide();
        $('#logoutSection').show();
        $('#errorMSG').hide();
        $('#displayUsername').text(username);
      }).fail(function(data) {
        console.log('something went wrong!');
      })
    } else {
      $('#errorMSG').text('username and password both are required!')
    }

    return false;
  });

  $('#logoutButton').on("click", function() {
    $('#loginForm').show();
    $('#logoutSection').hide();
    results.empty();
  })
});
