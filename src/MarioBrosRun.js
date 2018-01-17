var MarioBrosRun = function(top, left, timeBetweenSteps) {
Dancer.call(this,top, left, timeBetweenSteps)
  this.$node.addClass('MarioBrosRun').prepend("<img src='MarioBros.gif' height=200px with=100px />");
  Dancer.apply(this, arguments);
  console.log(this);
};

MarioBrosRun.prototype = Object.create(Dancer.prototype);
MarioBrosRun.prototype.constructor = MarioBrosRun;
