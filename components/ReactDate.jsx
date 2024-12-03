import React from "react";
import { LucideCalendar } from "lucide-react";
import { DateRange } from "react-date-range";

function ReactDate() {
  const [isShowDate, setIsShowDate] = React.useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date("2024,1,5"),
      endDate: new Date("2024,1,10"),
      key: "selection",
    },
  ]);
  return (
    <div className="flex items-center justify-center h-full mt-10">
      <div className="relative">
        <h1>
          Selected Range: {state[0].startDate.toDateString()} to{" "}
          {state[0].endDate.toDateString()}
        </h1>
        <button
          onClick={() => setIsShowDate(!isShowDate)}
          className="flex items-center gap-x-1 text-sm rounded-lg border px-4 py-2 bg-[#7f56d9] text-white"
        >
          <LucideCalendar className="text-lg" />
          <span className="font-medium">Select date</span>
        </button>
        {isShowDate && (
          <div className="absolute flex items-center justify-center mt-5 -right-[300px]">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              showSelectionPreview={false}
              showDateDisplay={false}
              months={2}
              showPreview={false}
              className="rounded-lg shadow-md"
              direction="horizontal"
              rangeColors={"#7f56d9"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReactDate;
