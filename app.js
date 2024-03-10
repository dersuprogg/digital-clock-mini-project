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
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];

const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
];

function setTextContent(el, text) {
  el.textContent = text;
}

function getDateData() {
  const today = new Date();
  const day = weekdays[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()].toLowerCase();
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
  setTextContent(dayEl, day);
  setTextContent(dateEl, date);
  setTextContent(monthEl, month);
  setTextContent(yearEl, year);
}

function getClockData() {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  return {
    hour,
    minute,
    second,
  };
}

function setClockData() {
  const { hour, minute, second } = getClockData();
  hourEl.textContent = hour <= 9 ? "0" + hour : hour;
  minuteEl.textContent = minute <= 9 ? "0" + minute : minute;
  secondEl.textContent = second <= 9 ? "0" + second : second;
}

document.addEventListener("DOMContentLoaded", () => {
  setDateData();
  setClockData();
  setInterval(setClockData, 1000);
});
