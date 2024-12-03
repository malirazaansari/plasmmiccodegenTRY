import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { registerCodeComponent } from "@plasmicapp/loader-react";
import DatePickerWithRangePlasmicWrapper from "./components/DatePickerWithRangePlasmicWrapper";
import { addDays } from "date-fns";

// const plasmicLoader = initPlasmicLoader({
//   projects: [
//     {
//       id: "66SW6wkFfExDA3DWxVn4eg",
//       token:
//         "0lmAC3jQXZtcHA2mJfJnmbGr5QAklfYRFrgwWovsiyi4LkJipCtZnBfJT7GYQAinXMD565rmSjDJLUAQ",
//     },
//   ],
//   preview: true,
// });

// registerCodeComponent({
//   name: "DateRangePicker",
//   component: DatePickerWithRangePlasmicWrapper,
//   props: {
//     minDate: {
//       type: "string",
//       defaultValue: new Date().toISOString(),
//     },
//     maxDate: {
//       type: "string",
//       defaultValue: addDays(new Date(), 365).toISOString(),
//     },
//     onDateRangeSelect: {
//       type: "eventHandler",
//     },
//     className: {
//       type: "string",
//     },
//   },
// });
try {
  const plasmicLoader = initPlasmicLoader({
    projects: [
      {
        id: "66SW6wkFfExDA3DWxVn4eg",
        token:
          "0lmAC3jQXZtcHA2mJfJnmbGr5QAklfYRFrgwWovsiyi4LkJipCtZnBfJT7GYQAinXMD565rmSjDJLUAQ",
      },
    ],
    preview: true,
  });

  registerCodeComponent({
    name: "DateRangePicker",
    component: DatePickerWithRangePlasmicWrapper,
    props: {
      minDate: {
        type: "string",
        defaultValue: new Date().toISOString(),
      },
      maxDate: {
        type: "string",
        defaultValue: addDays(new Date(), 365).toISOString(),
      },
      onDateRangeSelect: {
        type: "eventHandler",
      },
      className: {
        type: "string",
      },
    },
  });
} catch (error) {
  console.error("Error initializing Plasmic:", error);
}
