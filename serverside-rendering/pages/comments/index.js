const CommentsList = ({ data }) => {
  return (
    <div>
      <h4>List of comments</h4>
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

export default CommentsList;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  //   console.log(data);
  return { props: { data: data } };
}
