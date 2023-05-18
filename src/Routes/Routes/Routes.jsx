import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Home from "../../components/Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
