import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Cool</p>
      <StaticImage
        alt="Metroparks Toledo's green roof"
        src="../images/464.jpg"
      ></StaticImage>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
