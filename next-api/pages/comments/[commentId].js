import { useRouter } from "next/router";

const commentId = (data) => {
  const { id, body } = data.data.comment;

  return (
    <div key={id}>
      <p>
        {id} - {body}
      </p>
    </div>
  );
};

export default commentId;

export async function getServerSideProps(ctx) {
  const { params, req, res } = ctx;
  const response = await fetch(
    `http://localhost:3005/api/comments/${params.commentId}`
  );
  const data = await response.json();
  console.log(data);
  return { props: { data: data } };
}
