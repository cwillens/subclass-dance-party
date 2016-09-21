var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="cats"></span>'); 
  //this.$node.addClass('cats');

  this.diameter = 100;
  makeDancer.prototype.setPosition.call(this, top, left);
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function() {
  this.$node.animate({
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random()
  }, 1000, function() {
// Animation complete.
  });

  makeDancer.prototype.step.call(this);
};
