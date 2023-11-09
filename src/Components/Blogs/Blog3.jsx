/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Blog3 = ({title}) => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Job Heaven | ${title}`
  }, [location.pathname, title])
  return (
    <div className="max-w-screen-xl mx-auto mb-10 ">
      <div className="mt-10">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))",
            }}
          ></div>
          <img
            src="https://i.postimg.cc/NFkFb6ks/code.png"
            className="left-0 top-0 w-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <Link
              to="/"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Web Development
            </Link>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Code Explanation: React Responsive Navbar
            </h2>
            <div className="flex mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  Naymul Islam{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs"> 08 Nov </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Import Statements:
          </h2>
          <p className="pb-6">
            The code starts by importing necessary modules and components from
            various libraries.
            <br />
            It uses React components like useContext, useState, and icons from
            the react-icons library. It also imports the Tooltip component and
            some styles from the react-tooltip and react-router-dom libraries.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Functional Component Navbar:
          </h2>
          <p className="pb-6">
            This component is responsible for rendering the website&apos;s
            navigation bar.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            State Management:
          </h2>
          <p className="pb-6">
            useState is used to manage the state of menuOpen, which controls the
            visibility of the navigation menu.
          </p>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            Toggle Menu:
            <br />
            onMenuToggle is a function that toggles the menuOpen state, making
            the menu visible or hidden when invoked.
          </div>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            User Authentication:
          </h2>
          <p className="pb-6">
            The component uses useContext to access user authentication
            information like user and logout from the AuthContext. This context
            likely contains user details and authentication functions.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Conditional Rendering:
          </h2>
          <p className="pb-6">
            The visibility of the navigation menu is controlled by the menuOpen
            state. If the menuOpen is true, the menu is displayed; otherwise,
            it&apos;s hidden (responsive behavior). Navigation links are
            conditionally displayed based on whether a user is authenticated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
