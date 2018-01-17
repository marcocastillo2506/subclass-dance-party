describe("Fireball", function() {

  var Fireball;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    Fireball = new Fireball(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(Fireball.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(Fireball.$node, 'toggle');
    Fireball.step();
    expect(Fireball.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(Fireball, "step");
      expect(Fireball.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(Fireball.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(Fireball.step.callCount).to.be.equal(2);
    });
  });
});
