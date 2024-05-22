///first programm
function fn1(x) {

  if (arguments.length == 0) {
    x = 1;
  }
  return function (y) {
    alert(x + y);
  }
}

let fn2 = fn1(6);
fn2(5);

// second programm
function counter(startValue, step) {
  let count = startValue;

  function increment() {
    count += step;
    console.log(count);
  }

  function decrement() {
    count -= step;
    console.log(count);
  }

  function reset() {
    count = 0;
    console.log(count);

  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
}

let myCounter = counter(5, 4);

myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.increment()
myCounter.increment()
myCounter.reset()

///third programm
function sequence(...funcs) {
  return function (startValue) {
    return funcs.reduce((result, func) => func(result), startValue);
  };
}

function f1(x) {
  return x + 1;
}

function f2(x) {
  return x * 2;
}

function f3(x) {
  return x - 3;
}

const seqFunc = sequence(f1, f2, f3);
console.log(seqFunc(13)); 