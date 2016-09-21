$(document).ready(function() {
  window.dancers = [];
  window.linedUp = false;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction( // new keyword is required for pseudoclassical instantiation
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // get the maker function for the kind of dancer we're supposed to make

    // make a dancer with a random position

    //loop through dancers
    //change the position of each

    linedUp = true;

    var currentSpot = 50; 

    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      //currentDancer.setPosition(currentSpot, '10px');

      currentDancer.step = function() {
        //do nothing
      };
      currentDancer.$node.stop(true, false);

    }

    setTimeout(function() {

      for (var i = 0; i < window.dancers.length; i++) {
        var currentDancer = window.dancers[i];
        //currentDancer.setPosition(currentSpot, '10px');


        currentDancer.$node.animate({
          top: currentSpot,
          left: '10px'
        }, 1000, function() {
      // Animation complete.
        });

        currentSpot += 103;
      }
    }, 1000);




  });

  var counter = 0;
  var checkDist = function() {
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      var dancerHeight = Number(currentDancer.$node.css('height').slice(0, -2)); 
      var dancerTop = Number(currentDancer.$node.css('top').slice(0, -2));
      var dancerLeft = Number(currentDancer.$node.css('left').slice(0, -2));
      var dancerWidth = Number(currentDancer.$node.css('width').slice(0, -2));

      var dancer1Loc = [dancerTop + dancerHeight / 2, dancerLeft + dancerWidth / 2];
      for (var j = i + 1; j < window.dancers.length; j++) {
        var otherDancer = window.dancers[j];
        var otherDancerHeight = Number(otherDancer.$node.css('height').slice(0, -2)); 
        var otherDancerTop = Number(otherDancer.$node.css('top').slice(0, -2));
        var otherDancerLeft = Number(otherDancer.$node.css('left').slice(0, -2));
        var otherDancerWidth = Number(otherDancer.$node.css('width').slice(0, -2));

        var dancer2Loc = [otherDancerTop + otherDancerHeight / 2, otherDancerLeft + otherDancerWidth / 2];
        var distance = Math.sqrt(Math.pow((dancer1Loc[0] - dancer2Loc[0]), 2) + Math.pow((dancer1Loc[1] - dancer2Loc[1]), 2));

        //if distance less than threshold, then dance together
        if (!linedUp && distance <= (dancerHeight / 2) + (otherDancerHeight / 2)) {
          currentDancer.$node.stop(true, false);
          otherDancer.$node.stop(true, false);
          console.log(otherDancer.$node.queue());
        }
      }
    }
  };

  setInterval(checkDist, 133);

});



