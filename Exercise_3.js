function sum(x) {
  return function(y) {
    console.log(x + y);
  };
}

const f = sum(5);
f(103);
