// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>'); // 



  this.timeBetweenSteps = timeBetweenSteps;
  this.step.call(this); // this calls the subclass 'step function'
  this.setPosition.call(this, top, left);
  this.top = top;
  this.left = left;
  setInterval(this.checkDist, 1);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //debugger;
  setTimeout(this.step.bind(this), this.timeBetweenSteps); //
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.checkDist = function() {
      //create function
  //for each cat
    //loop through all other cats and calculate distance between positions
      //if distance is below a threshold
        //set a temp var = step;
        //set step function to {};
        //animate them to go opposite directions
        //set step function back to normal, call step function
      };


/*

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    debugger;
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};*/