// 회원 정보
// 번호, 아이디, 비밀번호, 포인트
// 포인트 적입, 포인트 사용

let userInfo = { PK_num: 1, id: 'jin4344', password: '1234', point: 0 };
userInfo.getPoint=function(point){
    this.point+=point;
}
userInfo.usePoint=function(point)
