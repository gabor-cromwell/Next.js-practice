import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h2>Details about the product {productId}</h2>
    </div>
  );
};

export default ProductDetail;
