// 댓글 알아서 자유롭게

const post = new Object();
post.postPkId = 3;
post.postTitle = '제목';
post.postContent = '내용';
post.member = { id: 1, memberId: 'jin4344', password: '1234', point: 3000 };

const comment = new Object();
// 게시글 번호
comment.postPkId = 3;
// 댓 작성자
comment.commenter = { id: 2, memberId: 'seo344', password: '4321', point: 6700 };
comment.content = '댓글 내용';
