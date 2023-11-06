import { Link } from "react-router-dom";
import "./ErrorPage.css"
const ErrorPage = () => {
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404"></div>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-[#2b68e0] to-[#b161b2]">404</h1>
          <h2 className="text-2xl font-semibold">Oops, we&apos;re sorry!</h2>
          <p className="text-base text-gray-600">
           The page you&apos;re searching for seems to have disappeared, been removed, or might just be taking a short break. Please check the link, and if you need assistance, feel free to contact us.
          </p>
          <button className="mt-5 hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold transition-colors duration-300 text-white px-3 py-3 rounded-lg">
          <Link to="/">Back to homepage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
