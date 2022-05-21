var obj = {
  name: "jw"
}

var A = function (params) {

}

A.prototype = obj

var a = new A()

a.name = 666

console.log(a.name);

console.log(obj.name);

console.log(Object.prototype, A.prototype);

/**
 * let a = new Object()
 * let a = {}
 * 
 * Object.prototype = null;
 * 
 */