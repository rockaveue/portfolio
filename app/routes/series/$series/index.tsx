import { useParams } from "@remix-run/react";

const SerialPage = () => {
  const params = useParams()
  return <div>This is serial page of {params.series}</div>;
};

export default SerialPage;
