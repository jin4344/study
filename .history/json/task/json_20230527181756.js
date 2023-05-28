// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Products(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
}

const product1 = new Products('apple', 1000, 20);
const product1 = Products('banana', 1500, 100);
const product1 = Products('jelly', 2200, 220);

const productArray = new Array(product1, product2, product3);
const productJson = JSON.stringify(productArray);
console.log(productJson);
