// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>'); // 

  this.timeBetweenSteps = timeBetweenSteps;
  this.step.call(this); // this calls the subclass 'step function'
  this.setPosition.call(this, top, left);
  this.top = top;
  this.left = left;
  
  this.$node.mousedown(function(event) {
    $(this).animate({
      height: '150px',
      width: '150px'
    }, 500, function() {
    });
  });

};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps); //
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

