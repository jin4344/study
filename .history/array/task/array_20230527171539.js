// 1~10까지 array객체에 담은 후 짝수만 출력
// 한글을 정수로 변경
// 정수를 한글로 변경

const num = new Array(10).fill(0);
num
  .map((num, i) => (num = i + 1))
  .filter((num) => num % 2 == 0)
  .forEach((data) => console.log(data));

// num.forEach((data) => console.log(data));

const num1 = '12345';
console.log(parseInt(num1));
