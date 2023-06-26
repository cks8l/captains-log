import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
        <p>Cool2</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Us" />;

export default AboutPage;
