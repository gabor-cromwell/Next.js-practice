import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      {/* <h4>Apple</h4>
      <h4>Banana</h4>
      <h4>Orange</h4> */}
      <Link href={`/product/${productId}`}>Product {productId} page</Link>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default ProductList;
