import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import SingleBookDetails from "../components/SingleBookDetails";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import ReadBooks from "../pages/ReadBooks";
import Wishlists from "../pages/Wishlists";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/:bookId",
        element: <SingleBookDetails></SingleBookDetails>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("data.json"),
          },
          {
            path: "wishlists",
            element: <Wishlists></Wishlists>,
            
          },
        ],
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);
