var makeBeeDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps); // bind makeBlinkyDancer instance to 'this'
  // need this call to give non-method properties to the subclass instance
  this.$node = $('<span class="bees"></span>'); 
  this.diameter = 100;
  makeDancer.prototype.setPosition.call(this, top, left);
};

makeBeeDancer.prototype = Object.create(makeDancer.prototype);
makeBeeDancer.prototype.constructor = makeBeeDancer;

makeBeeDancer.prototype.step = function() {
  //debugger;


  makeDancer.prototype.step.call(this); // cannot do 'this.prototye.step.call' 
  // because 'this' binds to instance of makeBlinkyDancer, 
  // when you actually need to call the 'step' method of the superclass
  //this.$node.toggle(); // 'this' is bound to an instance of makeBlinkyDancer class
};
