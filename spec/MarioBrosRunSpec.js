describe("MarioBrosRun", function() {

  var MarioBrosRun;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    MarioBrosRun = new MarioBrosRun(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(MarioBrosRun.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(MarioBrosRun.$node, 'toggle');
    MarioBrosRun.step();
    expect(MarioBrosRun.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(MarioBrosRun, "step");
      expect(MarioBrosRun.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(MarioBrosRun.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(MarioBrosRun.step.callCount).to.be.equal(2);
    });
  });
});
