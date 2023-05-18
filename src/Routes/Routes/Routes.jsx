import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Home from "../../components/Pages/Home";
import Login from "../../components/Pages/Login";
import Register from "../../components/Pages/Register";
import AllToys from "../../components/Pages/AllToys";
import MyToys from "../../components/Pages/MyToys";
import AddToy from "../../components/Pages/AddToy";
import Blogs from "../../components/Pages/Blogs";
import UpdateProduct from "../../components/Pages/UpdateProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/myToys",
        element: <MyToys />,
      },
      {
        path: "/addAToy",
        element: <AddToy />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/UpdateProduct",
        element: <UpdateProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
