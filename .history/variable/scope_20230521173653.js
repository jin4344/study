var x = 10;

f();

function f() {
  var y = 20; //이건 지역 변수로, 사라짐
  z = 30; //이러면 전역 변수 됨
  console.log(x);
}

// console.log(y);
console.log(z);
