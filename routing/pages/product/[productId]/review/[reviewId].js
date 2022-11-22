import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h3>ProductId: {productId}</h3>
      <h3>ReviewId: {reviewId}</h3>
    </div>
  );
};

export default Review;
