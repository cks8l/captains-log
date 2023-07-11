import * as React from "react";
import Layout from "../../components/layout";
import Calendar from "../../components/calendar";
import Seo from "../../components/seo";

const ArchivesPage = () => {
  return (
    <Layout pageTitle="Archives">
      <Calendar></Calendar>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Archives"
    desc="Browse the archives of posts logged on this site."
  />
);

export default ArchivesPage;
