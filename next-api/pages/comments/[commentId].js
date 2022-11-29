import { useRouter } from "next/router";

const commentId = () => {
  const router = useRouter();
  const id = router.query.commentId;
  //   console.log(id);

  //   const fetchComment = async (id) => {
  //     const response = await fetch(`http://localhost:3005/comments/${id}`);
  //     const data = await response.json();
  //     console.log(data);
  //   };

  return <div>Hello</div>;
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
