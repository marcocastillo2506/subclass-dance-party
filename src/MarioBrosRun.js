var MarioBrosRun = function(top, left, timeBetweenSteps) {
  this.$node.addClass('MarioBrosRun').prepend("<img src='MarioBros.gif'/>");
  Dancer.apply(this, arguments);
  console.log(this);
};

MarioBrosRun.prototype = Object.create(Dancer.prototype);
MarioBrosRun.prototype.constructor = MarioBrosRun;
