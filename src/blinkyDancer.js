var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 1000 * Math.random();
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps); // bind makeBlinkyDancer instance to 'this'
  // need this call to give non-method properties to the subclass instance
  this.$node.addClass('blinkies');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  //debugger;
  makeDancer.prototype.step.call(this); // cannot do 'this.prototye.step.call' 
  // because 'this' binds to instance of makeBlinkyDancer, 
  // when you actually need to call the 'step' method of the superclass
  this.$node.toggle(); // 'this' is bound to an instance of makeBlinkyDancer class
};


















/*

  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
}; */