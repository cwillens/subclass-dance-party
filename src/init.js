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
      Math.random() * 1000
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

  $('.cat').on('click', function(event) {
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

    this.$node.animate({
      height: '150px',
      width: '150px'
    }, 500, function() {
  // Animation complete.
    });

    this.$node.animate({
      height: '100px',
      width: '100px'
    }, 500, function() {
  // Animation complete.
    });

  });

});



