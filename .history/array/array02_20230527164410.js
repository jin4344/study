// arrow expression, 람다람 거의 똑같음
const datas = new Array(4).fill(0);
// datas.forEach(function (data, i, datas) {
//   console.log(data, i);
//   console.log(datas);
// });
// 위 foreach을 람다로
datas.forEach((data,i)=>