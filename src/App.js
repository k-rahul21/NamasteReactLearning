import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import RestrauntMenu from "./components/RestrauntMenu/RestrauntMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

//async defer
root.render(<RouterProvider router={appRoute} />);
