import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import PrivateRoute from "../components/Private/PrivateRoute";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import AddJob from "../Components/AddJob/AddJob";
import MyJobs from "../Components/MyJobs/MyJobs";
import AppliedJobs from "../Components/AppliedJobs/AppliedJobs";
import Blogs from "../Components/Blogs/Blogs";
import Blog1 from "../Components/Blogs/Blog1";
import Blog2 from "../Components/Blogs/Blog2";
import Blog3 from "../Components/Blogs/Blog3";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/addJob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: "/myJobs",
          element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
          path: "/AppliedJobs",
          element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "/blog1",
          element: <Blog1></Blog1>
        },
        {
          path: "/blog2",
          element: <Blog2></Blog2>
        },
        {
          path: "/blog3",
          element: <Blog3></Blog3>
        },

      ],
    },
  ]);

  export default router