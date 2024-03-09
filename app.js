"use strict";

// SELECT UI ELEMENTS
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dotsEl = document.querySelector(".dots");

const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const monthEl = document.querySelector(".month");
const yearEl = document.querySelector(".year");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

function getDateData() {
  const today = new Date();
  const day = weekdays[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return {
    day,
    date,
    month,
    year,
  };
}

function setDateData() {
  const { day, date, month, year } = getDateData();
  dayEl.textContent = day.slice(0, 3);
  dateEl.textContent = date;
  monthEl.textContent = month;
  yearEl.textContent = year;
}

document.addEventListener("DOMContentLoaded", () => {
  setDateData();
});
