// 1~10까지 array객체에 담은 후 짝수만 출력
// 한글을 정수로 변경
// 정수를 한글로 변경

const num = new Array(10).fill(num.map((num, i) => (num = i + 1)));
num.map((num, i) => (num = i + 1));
num.forEach((data) => console.log(data));
