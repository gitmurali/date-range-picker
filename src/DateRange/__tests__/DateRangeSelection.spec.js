import React from "react";
import { shallow } from "enzyme";
import DateRangeSelection from "../DateRangeSelection";
import DateRangeDetails from "../DateRangeDetails";

describe("DateRange", () => {
  it("renders DateRangeSelection", () => {
    shallow(<DateRangeSelection />);
  });

  it("should contain the ShowDateRangeDetails component", () => {
    const wrapper = shallow(<DateRangeSelection />);
    expect(wrapper.find("DateRangePicker")).toHaveLength(1);
  });

  it("should display the DateRangeDetails component", () => {
      let props = {
        datesDiff: 2,
        isEndDateInLeapYear: true,
        isStartDateInLeapYear: false,
        messageFromDateApi: 'dummy message from api',
        numberOfMondaysInDateRange: 20
      };
    const wrapper = shallow(<DateRangeDetails {...props}/>);
    expect(wrapper.find('.dateRange-details--cell-datesDiff').text()).toEqual('2');
  });
});
