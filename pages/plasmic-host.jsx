import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
} from "@plasmicapp/react-web/lib/host";

import { addDays } from "date-fns";
import DatePickerWithRangePlasmicWrapper from "@/components/DateRangeContextWarpper";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

registerComponent({
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

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
