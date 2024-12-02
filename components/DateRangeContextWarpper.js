import React from "react";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { usePlasmicComponentData } from "@plasmicapp/loader-react";

const DatePickerWithRangePlasmicWrapper = (props) => {
  const { minDate, maxDate, onDateRangeSelect, className } =
    usePlasmicComponentData(props);

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
