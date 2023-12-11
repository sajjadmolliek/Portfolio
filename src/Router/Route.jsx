import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
  ]);

  export default Route;