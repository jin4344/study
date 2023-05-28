let user1 = { id: 'june', name: 'jinseo' };
let user2 = { id: 'j', name: 'jseo' };
let user3 = new Array(user1, user2);

let userJson = JSON.stringify(user3);
console.log(userJson);

let parseUser = JSON.parse(userJson);
console.log(par);
