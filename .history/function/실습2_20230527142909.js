// 대소 비교, 두 정수 입력 시 첫 정수가 크거나 같으면 Ture
// 아니면 false, 큰 값을 다른 함수에서 출력한다.

smaller(3, 5, bigger);

function smaller(num1, num2, callback) {
  if (num1 >= num2) {
    console.log(num1);
    if (callback) {
      callback(num2);
    }
  } else {
    console.log(num2);
    if (callback) {
      callback(num1);
    }
  }
}

function bigger(num) {
  console.log(num);
}
