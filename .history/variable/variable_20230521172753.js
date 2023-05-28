// 동적 바인딩: 컴파일 시 값에 따라
// 자료형이 동적으로 결정

var data = 10;
console.log(data);
console.log(typeof data);

data = '안녕';
console.log(typeof data);

//var로 이미 선언했어도 여러번
//선언이 되 계속 수정 가능
var data = true;
console.log(typeof data);


//hoistiong(호이스팅)
var data