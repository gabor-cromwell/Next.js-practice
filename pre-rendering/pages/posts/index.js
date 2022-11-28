import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>This is a list of posts</h1>

      {posts.map((post) => {
        return (
          <>
            <Link href={`posts/${post.id}`}>
              <p>
                {post.id} - {post.title}
              </p>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return { props: { posts: data } };
}

export default Posts;
