import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div>
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
            <li>
              <Link to="/">Log</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
