/**
 * 多态
 */


// function Duck() {
// }
// function Chicken() {
// }


// let makeSound = function (animal) {
//   if (animal instanceof Duck) {
//     console.log('嘎嘎嘎');
//   } else if (animal instanceof Chicken) {
//     console.log('咯咯咯');
//   }
// }


// makeSound(new Duck())
// makeSound(new Chicken())



// 优化以上代码
// 符合开放-封闭原则

let makeSound = function (animal) {
  animal.sound()
}


function Duck() {
}
Duck.prototype.sound = function () {
  console.log('嘎嘎嘎');
}

function Chicken() {
}
Chicken.prototype.sound = function () {
  console.log('咯咯咯');
}

function Dog() {
}
Dog.prototype.sound = function () {
  console.log('汪汪汪');
}

makeSound(new Duck())
makeSound(new Chicken())
makeSound(new Dog())