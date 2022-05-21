var Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
}

var plane = new Plane()
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;


//var clonePlane = Object.create(plane)

var clonePlane = myCreate(plane)
// console.log(clonePlane instanceof Plane);
clonePlane.blood = 1999;


function myCreate(obj) {
  let F = function () { };
  F.prototype = obj;
  return new F()
}

