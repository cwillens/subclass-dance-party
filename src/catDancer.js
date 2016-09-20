var makeCatDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps); // bind makeBlinkyDancer instance to 'this'
  // need this call to give non-method properties to the subclass instance
  this.$node = $('<span class="cat"></span>'); 

  
  this.$node.mousedown(function(event) {
    console.log('hi');
  //   this.$node.animate({
  //     height: '150px',
  //     width: '150px'
  //   }, 500, function() {
  // // Animation complete.
  //   });
  });

  this.diameter = 100;
  makeDancer.prototype.setPosition.call(this, top, left);
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function() {
  //debugger;
  this.$node.animate({
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()
  }, this.timeBetweenSteps, function() {
// Animation complete.
  });

  makeDancer.prototype.step.call(this); // cannot do 'this.prototye.step.call' 
  // because 'this' binds to instance of makeBlinkyDancer, 
  // when you actually need to call the 'step' method of the superclass
  //this.$node.toggle(); // 'this' is bound to an instance of makeBlinkyDancer class
};
