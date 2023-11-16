import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
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
import AllJobs from "../Components/AllJobs/AllJobs";
import JobDetail from "../Components/JobDetail/JobDetail";
import UpdateJob from "../Components/UpdateJob/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home title="Your Dream Job, Our Mission"></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp title="Sign Up"></SignUp>,
      },
      {
        path: "/login",
        element: <Login title="Login"></Login>,
      },
      {
        path: "/allJobs",
        element: <AllJobs title="All Jobs"></AllJobs>,
        loader: () => fetch("https://job-heaven-server.vercel.app/allJobs/add"),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob title="Add A Job"></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs title="My Jobs"></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs title="Applied Jobs"></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetail/:id",
        element: (
          <PrivateRoute>
            <JobDetail title="Job Detail"></JobDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-heaven-server.vercel.app/allJobs/add/${params.id}`),
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-heaven-server.vercel.app/allJobs/user/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs title="Blogs"></Blogs>,
      },
      {
        path: "/blog1",
        element: <Blog1 title="Blog No: 1"></Blog1>,
      },
      {
        path: "/blog2",
        element: <Blog2 title="Blog No: 2"></Blog2>,
      },
      {
        path: "/blog3",
        element: <Blog3 title="Blog No: 3"></Blog3>,
      },
    ],
  },
]);

export default router;
