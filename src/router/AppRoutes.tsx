import { createBrowserRouter } from "react-router-dom";
import SummaryPage from "../pages/SummaryPage";
import LayOut from "../layout/LayOut";
import SelfSummaryPage from "../pages/SelfSummaryPage";
import AllProjectsPage from "../pages/AllProjectsPage";
import ContactInfoPage from "../pages/ContactInfoPage";
import MoreCredentialsPage from "../pages/MoreCredentialsPage";
import MyOfferingsPage from "../pages/MyOfferingsPage";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <SummaryPage />,
      },
      {
        index: true,
        path: "self-summary",
        element: <SelfSummaryPage />,
      },
      {
        index: true,
        path: "all-projects",
        element: <AllProjectsPage />,
      },
      {
        index: true,
        path: "contact-info",
        element: <ContactInfoPage />,
      },
      {
        index: true,
        path: "more-about-me",
        element: <MoreCredentialsPage />,
      },
      {
        index: true,
        path: "service-offerings",
        element: <MyOfferingsPage />,
      },
    ],
  },
]);
