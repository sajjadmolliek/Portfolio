import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Projects from "../Pages/Projects/Projects";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/projects',
          element:<Projects></Projects>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
      ]
    },
  ]);

  export default Route;