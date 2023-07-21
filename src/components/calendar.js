import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as calendarStyle from "./calendar.module.css";

const Calendar = ({ month }) => {
  // VARIABLES

  // stuff to fill the current route's calendar
  const calendarDays = [];
  const monthName = month.fullName;
  const year = month.year;
  const numDays = month.numDays;

  // stuff for today
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();

  console.log(monthName);
  console.log(year);
  console.log(numDays);
  console.log(today);
  console.log(currentMonth);
  console.log(currentDay);
  console.log(currentYear);

  // const firstDayOfMonth = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   1
  // ).getDay();
  // let calendarKey = 0;

  // PROCEDURES
  // for (let dayCount = 1; dayCount <= 31; dayCount++) {
  //   // On the first iteration, fill in days up to the 1st day of the month with empty list items
  //   if (dayCount === 1) {
  //     for (
  //       let firstDayCount = 0;
  //       firstDayCount < firstDayOfMonth;
  //       firstDayCount++
  //     ) {
  //       calendarDays.push(<li key={calendarKey}></li>);
  //       calendarKey++;
  //     }
  //   }

  //   if (dayCount === currentDay) {
  //     // The current day should have its own class
  //     calendarDays.push(
  //       <li
  //         className={`${calendarStyle.day} ${calendarStyle.today}`}
  //         key={calendarKey}
  //       >
  //         {dayCount}
  //       </li>
  //     );
  //   } else if (dayCount <= numDays) {
  //     // If the month actually has this day, push a regular day
  //     calendarDays.push(
  //       <li className={calendarStyle.day} key={calendarKey}>
  //         {dayCount}
  //       </li>
  //     );
  //   } else {
  //     // Otherwise, fill it with another empty <li>'s
  //     calendarDays.push(
  //       <li className={calendarStyle.day} key={calendarKey}></li>
  //     );
  //   }

  //   calendarKey++;
  // }

  // FUNCTIONS
  function prevMonth() {
    console.log("Going back one month...");
  }

  function nextMonth() {
    console.log("hiii");
  }

  return (
    <div className={calendarStyle.calendarContainer}>
      <h2>{month.fullName}</h2>
      {/* Go to previous month */}
      <button onClick={prevMonth} className={calendarStyle.prevMonth}>
        &lt;
      </button>
      {/* - List all days of the current month in a calendar-style grid */}
      <ul className={calendarStyle.calendar}>{calendarDays}</ul>
      {/* Go to next month */}
      <button onClick={nextMonth} className={calendarStyle.nextMonth}>
        &gt;
      </button>
      {/* - Any day with a post on that day should be a Link to the post */}
      {/* - All days after the current date should be greyed out */}
    </div>
  );
};

export default Calendar;
