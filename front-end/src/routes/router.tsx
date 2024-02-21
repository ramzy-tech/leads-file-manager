import { createBrowserRouter } from "react-router-dom";
import Explorer from "../pages/Explorer";
import Error from "../pages/Error";
import RootLayout from "../components/ui/RootLayout";
import Upload from "../pages/Upload";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Explorer /> },
      { path: "/upload", element: <Upload /> },
    ],
  },
]);

export default router;
