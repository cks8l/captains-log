import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Cool</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
