// 누군가가 미리 만들어 놓은 함수, 즉 메소드 같은거
// eval(expression): 문자열 수식 전달 시 자동 연산
let result = (function (expression) {
  return eval(expression);
})('2+5*9+1');

console.log(result);

// parseInt(),parseFloat()
function(string){return parseInt(string)}("30");
// inNaN(),isFinite()
