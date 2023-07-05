import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return <Layout pageTitle="Home"></Layout>;
};

export const Head = () => (
  <Seo
    title="Home"
    desc="A simple blog for recording thoughts and ideas, meanderings or otherwise."
  />
);

export default IndexPage;
