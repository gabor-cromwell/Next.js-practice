const CommentsByPoster = ({ data }) => {
  return (
    <div>
      <h4>Comments by poster {data[0].postId}</h4>
      {data.map((comment) => {
        return (
          <p key={comment.id}>
            {comment.id}. - {comment.name} - {comment.postId}
          </p>
        );
      })}
    </div>
  );
};

export default CommentsByPoster;

export async function getServerSideProps(ctx) {
  const { params, req, res } = ctx;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Gabor"]);
  const { poster } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${poster}/comments`
  );
  const data = await response.json();
  return { props: { data: data } };
}
