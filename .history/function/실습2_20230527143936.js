// 대소 비교, 두 정수 입력 시 첫 정수가 크거나 같으면 true
// 아니면 false, 큰 값을 다른 함수에서 출력한다.

let bool = smaller(6, 7, bigger);
console.log(bool);

function smaller(num1, num2, callback) {
  num1 >= num2 ? callback(num1) : callback(num2);
  return num1 >= num2 ? true : false;
}

function bigger(num) {
  console.log(num);
}
