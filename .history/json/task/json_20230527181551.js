// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Pr


const product1 = { name: 'apple', price: '1000', count: '20' };
const product2 = { name: 'banana', price: '1500', count: '60' };
const product3 = { name: 'jelly', price: '2200', count: '200' };

const productArray = new Array(product1, product2, product3);
const productJson = JSON.stringify(productArray);
console.log(productJson);
