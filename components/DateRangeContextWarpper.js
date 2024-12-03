import React from "react";
import { usePlasmicComponentData } from "@plasmicapp/loader-react";
import { DatePickerWithRange } from "./DateRangePicker";

const DatePickerWithRangePlasmicWrapper = (props) => {
  const { minDate, maxDate, onDateRangeSelect, className } =
    usePlasmicComponentData(props);

  const effectiveMinDate = minDate || new Date();
  const effectiveMaxDate = maxDate || addDays(new Date(), 365);

  return (
    <DatePickerWithRange
      className={className}
      minDate={minDate}
      maxDate={maxDate}
      onDateRangeSelect={onDateRangeSelect}
    />
  );
};

export default DatePickerWithRangePlasmicWrapper;
