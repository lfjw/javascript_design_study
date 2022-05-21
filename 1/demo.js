var duck = {
  duckSingSing: function () {
    console.log('嘎嘎');
  }
}

var chicken = {
  duckSingSing: function () {
    console.log('嘎嘎');
  }
}


var choir = []

var joinChoir = function (animal) {
  if (animal && typeof animal.duckSingSing === 'function') {
    choir.push(animal)
    console.log(`恭喜加入合唱团`);
    console.log(`合唱团的数量：${choir.length}`);
  }
}


joinChoir(duck)

joinChoir(chicken)

