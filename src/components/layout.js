import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import globalStyle from "../styles/globalStyle.css";
import * as layoutStyle from "./layout.module.css";

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
    <div className={layoutStyle.siteContainer}>
      <header>
        <ul>
          <li>
            <Link to="/archives">Archives</Link>
          </li>
          <li>
            <Link to="/">Log</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>

      <main className={layoutStyle.mainContainer}>
        <h1>{pageTitle}</h1>
        {children}
      </main>

      <footer>&copy; cks {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
