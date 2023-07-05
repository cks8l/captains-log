import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as archivesStyle from "./archives.module.css";
import { graphql } from "gatsby";

const ArchivesPage = ({ data }) => {
  const date = new Date();
  const currentMonth = data.allDatesJson.nodes[date.getMonth()];
  const currentDay = date.getDate();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const calendarDays = [];

  for (let dayCount = 1; dayCount <= 31; dayCount++) {
    // On the first iteration, fill in days up to the 1st day of the month with empty list items
    if (dayCount === 1) {
      for (
        let firstDayCount = 0;
        firstDayCount < firstDayOfMonth;
        firstDayCount++
      ) {
        calendarDays.push(<li></li>);
      }
    }

    if (dayCount === currentDay) {
      // The current day should have its own class
      calendarDays.push(
        <li className={`${archivesStyle.day} ${archivesStyle.today}`}>
          {dayCount}
        </li>
      );
    } else if (dayCount <= currentMonth.numDays) {
      // If the month actually has this day, push a regular day
      calendarDays.push(<li className={archivesStyle.day}>{dayCount}</li>);
    } else {
      // Otherwise, fill it with another empty <li>'s
      calendarDays.push(<li className={archivesStyle.day}></li>);
    }
  }

  return (
    <Layout pageTitle="Archives">
      <div className={archivesStyle.calendarContainer}>
        <h2>{currentMonth.fullName}</h2>
        {/* - List all days of the current month in a calendar-style grid */}
        <ul className={archivesStyle.calendar}>{calendarDays}</ul>
        {/* - Any day with a post on that day should be a Link to the post */}
        {/* - All days after the current date should be greyed out */}
      </div>
    </Layout>
  );
};

export const dateData = graphql`
  query {
    allDatesJson {
      nodes {
        id
        fullName
        numDays
        leap
      }
    }
  }
`;

export const Head = () => <Seo title="Archives" desc="Browse the archives of posts logged on this site." />;

export default ArchivesPage;
