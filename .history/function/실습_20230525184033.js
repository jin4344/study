//출력도 서비스, 한 함수에 한 서비스
//상품명, 가격, 개수를 전달받은 뒤 전체 금액 출력
//1. 상품명과 가격, 개수는 A함수에 전달
//2. B함수에서 상품명과 전체 금액을 전달받아서 출력
//3. A함수는 B함수를 callback로 전달
// A함수
// function product(name, price, left) {
//   productName = name;
//   productPrice = price;
//   productLeft = left;

//   sumPrice(name, price, left);
// }

// // B함수
// function sumPrice(name, price, left) {
//   console.log(name + '의 전체 금액: ' + price * left);
// }

// 다른버전, 위에거가 맞는지 몰라서

product('사과', 1500, 100, sumPrice);

// A함수
function product(name, price, left, callback) {
  console.log('제품명:' + name + ', 가격:' + price + ', 개수:' + left);
  if (callback) {
    callback(name, price * left);
  }
}

// B함수
function sumPrice(name, total) {
  console.log(name + '의 전체 금액:' + total);
}
