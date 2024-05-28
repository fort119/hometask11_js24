// first programm
function checkFn(a, b) {
  alert(a * b);
}

function makeLogging(fn) {
  let log = [];
  function wrapper() {
    log.push([].slice.call(arguments));
    console.log(log);
    return fn.apply(this, arguments);
  }

  return wrapper;
}


logDec = makeLogging(checkFn);

logDec(6, 7);
logDec(8, 9);
logDec(10, 11);
logDec(12, 13);

// second programm

function checkNumber(value) {
  return typeof value == 'number';
}

function typeCheck(fn, validator) {
  return function () {
    for (let i = 0; i < arguments.length; i++) {
      if (!validator(arguments[i])) {
        throw ("argument " + (i + 1) + " is incorrect");
      }
    }
    return fn.apply(this, arguments);
  }
}

function mult(a, b) {
  return a * b;
}

mult = typeCheck(mult, checkNumber);

console.log(mult(6, 5));

mult(4, "ff");
console.log(mult(4, 3));

///third programm программа даёт ограничение на неправильный ввод
function retry(fn, maxAttempts) {
  return function (...args) {
    let attempts = 0;
    while (attempts < maxAttempts) {
      try {
        return fn(...args);
      } catch (error) {
        attempts++;
        console.log(`Попытка ${attempts} из ${maxAttempts} провалилась: ${error.message}. Сейчас пройдёт следующая`);
        if (attempts === maxAttempts) {
          throw error;
        }
      }
    }
  };
}

const test1 = retry(function (x) {
  if (x == 0) {
    throw new Error("результат вычисления некорректный");
  }
  return x;
}, 6);

try {
  const result = test1(mult(4, 0));
  console.log(result);
} catch (error) {
  console.log("достигнуто максимальное количество попыток");
}

try {
  const result = test1(mult(4, 10));
  console.log(result);
} catch (error) {
  console.log("достигнуто максимальное количество попыток");
}