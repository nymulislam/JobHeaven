import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative shadow-lg px-3 py-2">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <img src="https://i.postimg.cc/KvBtkwyQ/Job-Heaven.png" alt="" />
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ${
              menuOpen ? "left-0" : "hidden md:block"
            } navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/allJobs">All Jobs</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/appliedJobs">Applied Jobs</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/myJobs">My Jobs</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/addJobs">Add A Job</Link>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">

            {/* Login */}
            <Link to="/login">
            <button
              type="button"
              className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold transition-colors duration-300 text-white px-5 py-2 rounded-full"
            >
              Login
            </button>
            </Link>

            {/* SignUp */}
            <Link to="/signUp">
            <button
              type="button"
              className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] transition-colors duration-300 font-bold text-white px-5 py-2 rounded-full"
            >
              SignUp
            </button>
            </Link>

            {/* Menubar condition */}
            {menuOpen ? (
              <MdClose
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer md:hidden"
              />
            ) : (
              <MdMenu
                onClick={onMenuToggle}
                className="text-[30px] cursor-pointer md:hidden"
              />
            )}


          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
