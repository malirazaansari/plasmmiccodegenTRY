// // This is a skeleton starter React page generated by Plasmic.
// // This file is owned by you, feel free to edit as you see fit.
// import * as React from "react";
// import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
// import { PlasmicHomepage } from "../components/plasmic/website_starter/PlasmicHomepage";
// import { useRouter } from "next/router";

// function Homepage() {
//   // Use PlasmicHomepage to render this component as it was
//   // designed in Plasmic, by activating the appropriate variants,
//   // attaching the appropriate event handlers, etc.  You
//   // can also install whatever React hooks you need here to manage state or
//   // fetch data.
//   //
//   // Props you can pass into PlasmicHomepage are:
//   // 1. Variants you want to activate,
//   // 2. Contents for slots you want to fill,
//   // 3. Overrides for any named node in the component to attach behavior and data,
//   // 4. Props to set on the root node.
//   //
//   // By default, PlasmicHomepage is wrapped by your project's global
//   // variant context providers. These wrappers may be moved to
//   // Next.js Custom App component
//   // (https://nextjs.org/docs/advanced-features/custom-app).
//   return (
//     <PageParamsProvider__
//       route={useRouter()?.pathname}
//       params={useRouter()?.query}
//       query={useRouter()?.query}
//     >
//       <PlasmicHomepage />
//     </PageParamsProvider__>
//   );
// }

// export default Homepage;

import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicHomepage } from "../components/plasmic/website_starter/PlasmicHomepage";
import { useRouter } from "next/router";

// Import your custom DateRangePicker component
import { DatePickerWithRange } from "../components/DateRangePicker"; // Update the path as necessary

function Homepage() {
  // Use PlasmicHomepage to render the homepage as it was designed in Plasmic Studio
  return (
    <PageParamsProvider__
      route={useRouter()?.pathname}
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      {/* Render the Plasmic homepage */}
      <PlasmicHomepage />

      {/* Add your custom DateRangePicker here */}
      <DatePickerWithRange className="row-start-3" />
    </PageParamsProvider__>
  );
}

export default Homepage;
