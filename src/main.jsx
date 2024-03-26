import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import SingleBookDetails from "./components/SingleBookDetails.jsx";
import { ToastContainer } from "react-toastify";
import Error from "./pages/Error.jsx";
import Wishlists from "./pages/Wishlists.jsx";
import ReadBooks from "./pages/ReadBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../public/data.json"),
      },
      {
        path: "/book/:bookId",
        element: <SingleBookDetails></SingleBookDetails>,
        loader: () => fetch("../public/data.json"),
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,

      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
