let obj1 = {
  name: 'jw'
}

let obj2 = {
  name: 'zs'
}

window.name = 1;

let getName = function () {
  console.log(this.name);
}


getName()
getName.apply(obj1)
getName.apply(obj2)