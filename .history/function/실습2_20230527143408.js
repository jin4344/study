// 대소 비교, 두 정수 입력 시 첫 정수가 크거나 같으면 true
// 아니면 false, 큰 값을 다른 함수에서 출력한다.

smaller(61, 411, bigger);

function smaller(num1, num2, callback) {
  num1 >= num2 ? console.log(true) : console.log(false);
  num1 >= num2 ? callback(num1) : callback(num2);
}

function bigger(num) {
  console.log(num);
}
