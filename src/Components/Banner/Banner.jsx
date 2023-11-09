import { FaSearch } from 'react-icons/fa';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero h-96 -mt-10 md:-mt-0">
      <div className="hero-content text-center">
        <div className="max-w-4xl relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea]">Unlock Your Dream Career</h1>
          <p className="py-6 text-xl md:text-3xl font-base">
          Exploring Opportunities, Creating Futures
          </p>
          <p className="py-1 px-12 text- text-lg text-gray-600 md:text-xl font-base">
          JobHeaven.com: Your Gateway to Career Bliss! Discover curated job listings,
         explore diverse roles, and unlock your dream career. Elevate your professional aspirations <br /> with JobHeaven.com – Exploring Opportunities, Creating Futures.
          </p>

          {/* Search field */}
            <div className="search-box absolute top-72 left-[50%] bg-gradient-to-br from-[#2b68e0] to-[#e710ea] flex items-center">
              <input
                type="text"
                placeholder="Search Your Dream Job"
                className="search-input bg-gradient-to-br from-[#2b68e0] to-[#550c56]"
              />
              <Link to="" className="search-btn bg-gradient-to-br from-[#2b68e0] to-[#e710ea] text-white border-solid border-2">
                <FaSearch></FaSearch>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
