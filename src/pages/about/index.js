import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const MorePage = ({ data }) => {
  console.log(data);
  return <Layout pageTitle="More Info"></Layout>;
};

export const Head = () => (
  <Seo
    title="More Info"
    desc="A short bio on the author of these posts, as well as links to other web projects."
  />
);

export default MorePage;
