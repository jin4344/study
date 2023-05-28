// 객체 안 선언된 key, value 중 key를 프로퍼티라고 한다.
let account = {
  owner: '황진서',
  age: 20,
  password: '1234',
  address: { address1: '서울시', address2: '대구' },
};
console.log(account);
console.log(account.address.address); //값 하나 가져올때
//규칙성이 있고, 여러 프로퍼티를 가져올 때
console.log(account['address']['address']);

// 객체의 프로퍼티명을 가져올 때 in 사용
for(let i in account.address){
    // console.log(typeof(i));
    console.log(account.address[i]);
}

// List(Array)처럼 순서가 있는 객체의 값을 가져올 때 사용
for (let i of [10, 20, 30, 40]){
    console.log(i);
}

// 객체는 순서가 있는 반복자가 아니기 때문에 of 사용 불가능
// for (let i of account.address){
//     console.log(i);
// }

// List(Array)를 in으로 사용하면, 각 프로퍼티명이 인덱스이므로, i에는 인덱스가 담긴다.
for (let i in [10, 20, 30, 40]){
    console.log(i);
}

account.money = 10000;
// account.deposit = function(돈){this.money += money;};
account.deposit = deposit;

function deposit(돈){
    this.money += money;
}

account.deposit(40000);

console.log(account.money);