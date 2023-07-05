import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title, desc }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={desc} />
    </>
  );
};

export default Seo;
