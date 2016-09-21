describe('catDancer', function() {

  var cat, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cat = new makeCatDancer(100, 100, 500);
  });

  it('should have class cats', function() {
    //debugger;
    expect(cat.$node.hasClass('cats')).to.be.true;
  });

  it('should have a jQuery $node object', function() {
    expect(cat.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(blinkyDancer.$node, 'toggle');
  //   blinkyDancer.step();
  //   expect(blinkyDancer.$node.toggle.called).to.be.true;
  // });

  it('should keep calling step', function() {
    sinon.spy(cat, 'step');
    clock.tick(timeBetweenSteps);
    var countNow = cat.step.callCount;
    console.log("count now is " + countNow);
    expect(cat.step.callCount > 0).to.be.true;
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
    console.log("call count now is "+cat.step.callCount);
    expect(cat.step.callCount > countNow).to.be.true;
  });
});
