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

  console.log(firstDayOfMonth);

  for (let dayCount = 1; dayCount <= 31; dayCount++) {
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
      // The current day should be highlighted a different color
      calendarDays.push(
        <li className={`${archivesStyle.day} ${archivesStyle.today}`}>
          {dayCount}
        </li>
      );
    } else if (dayCount <= currentMonth.numDays) {
      // If the month actually has this day, push a regular day
      calendarDays.push(<li className={archivesStyle.day}>{dayCount}</li>);
    } else {
      // Otherwise, fill it with more empty <li>'s
      calendarDays.push(<li></li>);
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

export const Head = () => <Seo title="Archives" />;

export default ArchivesPage;
