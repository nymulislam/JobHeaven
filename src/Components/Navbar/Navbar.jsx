import { useContext, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  };

  console.log(menuOpen);

  const { user, logout } = useContext(AuthContext);

  return (
    <header className="relative shadow-lg px-3 py-2">
      <nav className="flex justify-between">
        <div className="w-[150px] md:w-[200px] flex items-baseline">
          
          {/* nav logo */}
          <img src="https://i.postimg.cc/KvBtkwyQ/Job-Heaven.png" alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`navLinks duration-500  lg:static lg:w-auto w-full lg:h-auto h-[85vh] flex lg:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 lg:py-0 py-5 ${
              menuOpen ? "left-[0%] " : "hidden lg:block"
            }`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[2vw] gap-8 font-medium text-lg">
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/allJobs">All Jobs</Link>
              </li>

              {user && (
                <>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <Link to="/appliedJobs">Applied Jobs</Link>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <Link to="/myJobs">My Jobs</Link>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <Link to="/addJob">Add A Job</Link>
                  </li>
                </>
              )}

              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            {/* Login */}
            {user ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-outline btn-primary btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL || "https://placehold.co/600x400"}
                      alt="Profile"
                      data-tooltip-id="my-tooltip-1"
                    />
                    <Tooltip
                      id="my-tooltip-1"
                      place="bottom"
                      content={user?.displayName}
                    ></Tooltip>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
                >
                  <li className="py-3">
                    <a className="text-xl">{user?.email}</a>
                  </li>
                  <li>
                    <button
                      onClick={() => logout()}
                      className="btn btn-outline btn-error pt-3"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold transition-colors duration-300 text-white md:px-5 px-2 py-1 md:py-2 rounded-full"
                  >
                    Login
                  </button>
                </Link>

                <Link to="/signUp">
                  <button
                    type="button"
                    className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] transition-colors duration-300 font-bold text-white md:px-5 px-2 py-1 md:py-2 rounded-full"
                  >
                    SignUp
                  </button>
                </Link>
              </>
            )}

            {/* Menubar condition */}
            {menuOpen ? (
              <MdClose
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer lg:hidden"
              />
            ) : (
              <MdMenu
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer lg:hidden"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
