// element.matches('') = если элемент совпадает(мэчится) с элементом, у которого какой-то селектор(main button ex.)

// closure

// пример 1

let a = 10;

function f1() {
  console.log("global a = " + a);
}
f1(); // 10
a = 99;
f1(); // 99

// пример 2

function f2() {
  let a = 35; // переменная замкнута(спрятана)
  console.log("local a = " + a);
}

f2(); // 35
f1(); // 99

// пример 3(иногда переменные нужны снаружи)

function createstep(n = 0) {
  let count = n;

  return function () {
    count++;
    console.log(count);
  };
}
let step1 = createstep();
console.log(step1); // покажет саму функцию
let step2 = createstep(200);
step1(); //1
step1(); //2
step1(); //3
step2(); //201
step2(); //202

// пример 4(задача на попрошайку)

function randomint(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function createBeggar() {
  let s = 0;
  return function beggar() {
    s += randomint(0, 100);
    console.log(s);
    if (s >= 250) return;
    beggar();
  };
}
let begg1 = createBeggar();
let begg2 = createBeggar();
begg2();
begg1();
