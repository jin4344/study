// const datas=[];
// const datas=new Array();

// datas.push(1);//뒤에 새로 추가
// datas[0]=2; //추가인데, 인덱스에 맞춰서
// datas[5]=22; //이러면 5 인덱스를 만들고 5인덱스만 채워짐

// join(): 원하는 구분점으로 연결한 문자열 리턴
// const datas = [1, 2, 3, 4];
// console.log(datas.join(':'));

// slice(begin, end): 원하는 부분 추출, end는 exclusive
// const datas = [1, 2, 3, 4, 7];
// console.log(datas.slice(0, 3));

// splice(begin, deletCount):
// 원하는 부분 삭제, 뭘 삭제했는지 array 객첸로 리턴해 보여줌
// const datas = [1, 2, 3, 4, 7];
// console.log(datas.splice(0, 3));
// console.log(datas);

// indexOf(값)
// const datas = ['a', 'b', 'c', 'g'];
// let index = datas.indexOf('z');
// console.log(datas.splice(index, 1));
// console.log(datas);

// split(구분점): 구분저므로 값 분리 후 Array객체로 리턴
// let abc = 'abv';
// const datas = abc.split('');
// console.log(datas);

// replace(): 검색된
let abc = 'a,b,v';
const datas = abc.replace(',', '');
const datas = abc.replaceAll(',', '');
console.log(datas);
