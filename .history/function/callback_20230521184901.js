console.log(average(3, 5));

function average(num1, num2) {
  return (num1 + num2) / 2;
}

//출력도 서비스, 한 함수에 한 서비스
//상품명, 가격, 개수를 전달받은 뒤 전체 금액 출력
//1. 상품명과 가격, 개수는 A함수에 전달
//2. B함수에서 상품명과 전체 금액을 전달받아서 출력
//3. A함수는 B함수를 call
