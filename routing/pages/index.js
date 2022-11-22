import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Hello");
    router.push("/product");
  };

  return (
    <div>
      <h2>Home page</h2>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Products</Link>
      <br />
      <button onClick={handleClick}>Place your bet</button>
    </div>
  );
}
