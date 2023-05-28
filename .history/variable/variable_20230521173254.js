// 동적 바인딩: 컴파일 시 값에 따라자료형이 동적으로 결정

var data = 10;
console.log(data);
console.log(typeof data);

data = '안녕';
console.log(typeof data);

//var로 이미 선언했어도 여러번 선언이 되 계속 수정 가능
var data = true;
console.log(typeof data);

//hoistiong(호이스팅)
// 선언 위치 상관 없이, 선언 되면 가장 먼저 메모리 할당
// 이때 값은 같이 할당이 안된다.
// var 선언 안하면 할당 안된다
console.log(test);
var test = 10;
