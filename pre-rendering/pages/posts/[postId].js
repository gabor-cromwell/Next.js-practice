const Post = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <h3>{posts.title}</h3>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();
  const path = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  return {
    path: path,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(data);
  return { props: { posts: data } };
}
