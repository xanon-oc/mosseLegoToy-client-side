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
import SecureRoute from "./SecureRoute";
import NotFound from "../../components/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
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
        element: (
          <SecureRoute>
            <MyToys />
          </SecureRoute>
        ),
      },
      {
        path: "/addAToy",
        element: (
          <SecureRoute>
            <AddToy />
          </SecureRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/UpdateProduct/:id",
        element: (
          <SecureRoute>
            <UpdateProduct />
          </SecureRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/single-product/${params.id}`),
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
