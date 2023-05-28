// console.log(add(1, 3));

// function add(num1, num2) {
//   return num1 + num2;
// }

// 오버로딩이 안됨, 오버라이딩 가능
// 함수 식별자명이 겹치면 마지막에 선언한 함수 식별자로
// 오버 라이딩이 된다.
// function add(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// intro('항', 29, '남');

// 식별자 앞에 ...오면 가변인자로
// 인자 수가 알 수 없을 때 사용
// name을 써야한다면 가변인자보다 앞에 와야한다.
// function intro(name, ...datas) {
//   // ,하면 자동으로 줄바꿈되서 출력 됨
//   console.log(name, datas);
//   for (let i = 0; i < datas.length; i++) {
//     const element = datas[i];
//   }
// }

console.log(add(1, 3, 4, 5, 6));

function add(...num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
}

function average(num1, num2) {
  return (num1 + num2) / 2;
}

let total = getTotal(1, 2, function (total) {
  return total / 2;
});
console.log(total);

function getTotal(num1, num2, callback) {
  if (callback) {
    console.log(callback(num1 + num2));
  }
  return num1 + num2;
}