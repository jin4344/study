// var x = 10;
globalThis.x = 10; //전역 변수와 지역변수 식별자가 같은

f();

function f() {
  var x = 99;
  var y = 20; //이건 지역 변수로, 사라짐
  z = 30; //이러면 전역 변수 됨
  console.log(x);
  console.log(this.x);
}

// console.log(y);
console.log(z);
