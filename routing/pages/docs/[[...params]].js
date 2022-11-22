import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();

  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h2>
        Here should be the feature {params[0]} and concemp {params[1]} page
      </h2>
    );
  }

  if (params.length === 1) {
    return <h2>Here should be the feature {params[0]} page</h2>;
  }

  return <h2>Docs home page</h2>;
};

export default Doc;
