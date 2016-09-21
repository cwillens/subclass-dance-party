var makeBeeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); // bind makeBlinkyDancer instance to 'this'
  this.$node.addClass('bees');

  this.$node.mousedown(function(event) {
    $(this).animate({
      height: '150px',
      width: '150px'
    }, 500, function() {
    });
  });

  this.diameter = 100;
};

makeBeeDancer.prototype = Object.create(makeDancer.prototype);
makeBeeDancer.prototype.constructor = makeBeeDancer;

makeBeeDancer.prototype.step = function() {


  makeDancer.prototype.step.call(this); 
};


makeBeeDancer.prototype.spin = function() {
  var styleSettings = {
    '-webkit-transform': 'translate(100px) rotate(20deg)',
    '-webkit-transform-origin': '0 -250px',

    'transform': 'translate(100px) rotate(20deg)',
    'transform-origin': '0 -250px',
  };

  this.$node.animate(styleSettings, 0.5, function() { });
};
