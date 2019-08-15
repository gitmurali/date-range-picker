import React from "react";

const DateRangeDetails = ({
  datesDiff,
  isStartDateInLeapYear,
  isEndDateInLeapYear,
  numberOfMondaysInDateRange,
  messageFromDateApi
}) => {
  return (
    <>
      <div className="dateRange-details">
        <div className="dateRange-details__table">
          <div className="dateRange-details__body">
            <div className="dateRange-details__row">
              <div className="dateRange-details__cell">
                Number of days between the date range?
              </div>
              <div className="dateRange-details__cell dateRange-details--cell-datesDiff">{datesDiff}</div>
            </div>
            <div className="dateRange-details__row">
              <div className="dateRange-details__cell">
                Is the start date part of a leap year?
              </div>
              <div className="dateRange-details__cell dateRange-details--cell-isStartDateInLeapYear">
                <strong>{isStartDateInLeapYear ? "Yes" : "No"}</strong>
              </div>
            </div>
            <div className="dateRange-details__row">
              <div className="dateRange-details__cell">
                Is the end date part of a leap year?
              </div>
              <div className="dateRange-details__cell dateRange-details--cell-isEndDateInLeapYear">
                <strong>{isEndDateInLeapYear ? "Yes" : "No"}</strong>
              </div>
            </div>
            <div className="dateRange-details__row">
              <div className="dateRange-details__cell">
                Number of Mondays in this date range?
              </div>
              <div className="dateRange-details__cell dateRange-details--cell-numberOfMondaysInDateRange">
                {numberOfMondaysInDateRange}
              </div>
            </div>
            <div className="dateRange-details__row">
              <div className="dateRange-details__cell">
                What happened on this day?
              </div>
              <div className="dateRange-details__cell dateRange-details--cell-messageFromDateApi">
                {messageFromDateApi}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateRangeDetails;
