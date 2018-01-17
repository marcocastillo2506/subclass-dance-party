 var Fireball = function(top, left, timeBetweenSteps) {
Dancer.call(this,top, left, timeBetweenSteps)
  this.$node.addClass('Fireballshoot').prepend("<img src='Fireball.gif' height=200px with=100px />");
  console.log(this);
};

Fireball.prototype = Object.create(Dancer.prototype);
Fireball.prototype.constructor = Fireball;
