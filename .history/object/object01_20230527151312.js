// 객체 안 선언된 key, value 중 key를 프로퍼티라고 한다.
let account = { owner: '황진서', age: 20, password: '1234', address: { address: '서울시' } };
console.log(account);
console.log(account.address.address); //값 하나 가져올때
//규칙성이 있고, 여러 프로퍼티를 가져올 때
console.log(account['address']['address']); 
