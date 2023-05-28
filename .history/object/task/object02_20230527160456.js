// 댓글 알아서 자유롭게

const post = new Object();
post.id = 3;
post.postTitle = '제목';
post.postContent = '내용';
post.member = { id: 1, memberId: 'jin4344', password: '1234', point: 3000 };

const comment = new Object();
comment.content = '댓글 내용';
// 게시글 번호
comment.postid = 3;
// 댓 작성자
comment.commenter = { id: 2, memberId: 'seo344', password: '4321', point: 6700 };
