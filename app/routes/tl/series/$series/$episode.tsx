import { useParams } from "@remix-run/react";

const EpisodePage = () => {
  const params = useParams()
  return <div>This is episode {params.episode} of series {params.series}</div>;
};

export default EpisodePage;
