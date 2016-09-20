$(document).ready(function() {
  window.dancers = [];

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

    var currentSpot = 50; 

    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      //currentDancer.setPosition(currentSpot, '10px');

      currentDancer.step = function() {
        //do nothing
      };

      currentDancer.checkDist = function() {
        //do nothing
      };
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


        currentDancer.setPosition(currentSpot, 10);

        currentSpot += 103;
      }
    }, 2000);




  });

  var counter = 0;
  var checkDist = function() {
        //create function
    //for current cat
      //loop through all other cats and calculate distance between positions
        //if distance is below a threshold
          //set a temp var = step;
          //set step function to {};
          //animate them to go opposite directions
          //set step function back to normal, call step function
    for (var i = 0; i < window.dancers.length; i++) {
      var currentCat = window.dancers[i];
      var catHeight = Number(currentCat.$node.css('height').slice(0, -2)); 
      var catTop = Number(currentCat.$node.css('top').slice(0, -2));
      var catLeft = Number(currentCat.$node.css('left').slice(0, -2));
      var catWidth = Number(currentCat.$node.css('width').slice(0, -2));

      var cat1Loc = [catTop + catHeight / 2, catLeft + catWidth / 2];
      for (var j = i + 1; j < window.dancers.length; j++) {
        var otherCat = window.dancers[j];
        var otherCatHeight = Number(otherCat.$node.css('height').slice(0, -2)); 
        var otherCatTop = Number(otherCat.$node.css('top').slice(0, -2));
        var otherCatLeft = Number(otherCat.$node.css('left').slice(0, -2));
        var otherCatWidth = Number(otherCat.$node.css('width').slice(0, -2));

        var cat2Loc = [otherCatTop + otherCatHeight / 2, otherCatLeft + otherCatWidth / 2];
        var distance = Math.sqrt(Math.pow((cat1Loc[0] - cat2Loc[0]), 2) + Math.pow((cat1Loc[1] - cat2Loc[1]), 2));
        console.log('cats ' + i + ' ' + j + ' ' + distance);

        //if distance less than threshold, bounce apart
        if (distance <= (catHeight / 2) + (otherCatHeight / 2)) {
          currentCat.$node.stop(true, false);
          otherCat.$node.stop(true, false);
        }
      }
      
      //console.log('cat ' + i + ' at ' + cat1Loc);
    }
  };

  setInterval(checkDist, 133);

});



