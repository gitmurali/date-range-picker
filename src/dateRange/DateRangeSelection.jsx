import React, { useState, useEffect, Suspense, lazy } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import axios from "axios";
import "./dateRange.css";
import { countDays, isLeapYear } from "../helpers/index";
import Spinner from "../images/rolling.svg";

const ShowDateRangeDetails = lazy(() => import("./DateRangeDetails"));
let headers = { "Access-Control-Allow-Origin": "*" };

const DateRangeSelection = () => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [datesDiff, setDatesDiff] = useState(0);
  const [numberOfMondaysInDateRange, setNumberOfMondaysInDateRange] = useState(
    0
  );
  const [isStartDateInLeapYear, setIsStartDateInLeapYear] = useState("");
  const [isEndDateInLeapYear, setIsEndDateInLeapYear] = useState("");
  const [messageFromDateApi, setMessageFromDateApi] = useState("");

  useEffect(() => {
    const handleSubmit = () => {
      const [start, end] = date;
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const numberOfMondays = countDays([1], startDate, endDate);
      setDatesDiff(diffDays);
      setNumberOfMondaysInDateRange(numberOfMondays);
      setIsStartDateInLeapYear(isLeapYear(startDate.getFullYear()));
      setIsEndDateInLeapYear(isLeapYear(endDate.getFullYear()));
    };

    handleSubmit();
  }, [date]);

  useEffect(() => {
    const callApi = () => {
      const [start] = date;
      if (start) {
        axios
          .get(
            `http://numbersapi.com/${start ? start.getMonth() + 1 : ""}/${
              start ? start.getDate() : ""
            }/date`,
            headers
          )
          .then(function(response) {
            setMessageFromDateApi(response.data);
          })
          .catch(function(error) {
            // log errors
            console.error(error);
          });
      }
    };
    callApi();
  }, [isStartDateInLeapYear, date]);

  function onChange(date) {
    setDate(date);
  }

  return (
    <>
      <header>Date range picker</header>
      <main>
        <div className="dateRange-picker__container">
          <div className="dateRange-picker__label">
            <strong>Please select a date range:</strong>
          </div>
          <DateRangePicker onChange={onChange} value={date} clearIcon={null} />
        </div>
        <Suspense
          fallback={
            <div>
              <img src={Spinner} alt="loading.." />
            </div>
          }
        >
          <ShowDateRangeDetails
            datesDiff={datesDiff}
            isEndDateInLeapYear={isEndDateInLeapYear}
            isStartDateInLeapYear={isStartDateInLeapYear}
            messageFromDateApi={messageFromDateApi}
            numberOfMondaysInDateRange={numberOfMondaysInDateRange}
          />
        </Suspense>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default DateRangeSelection;
