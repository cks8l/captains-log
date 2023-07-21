import * as React from "react";
import Layout from "../../../components/layout";
import Calendar from "../../../components/calendar";
import Seo from "../../../components/seo";
import { graphql } from "gatsby";

const ArchivesPage = ({ data }) => {
  return (
    <Layout pageTitle="Archives">
      <Calendar month={data.monthsJson}></Calendar>
    </Layout>
  );
};

// QUERIES
export const monthData = graphql`
  query ($fullName: String, $year: Int) {
    monthsJson(fullName: { eq: $fullName }, year: { eq: $year }) {
      id
      fullName
      numDays
      leap
      year
    }
  }
`;

export const Head = () => (
  <Seo
    title="Archives"
    desc="Browse the archives of posts logged on this site."
  />
);

export default ArchivesPage;
