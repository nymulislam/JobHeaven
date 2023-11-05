import { FaSearch } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
  return (
    <div className="hero h-96">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea]">Unlock Your Dream Career</h1>
          <p className="py-6 text-2xl font-base">
          Exploring Opportunities, Creating Futures
          </p>

          {/* Search field */}
            <div className="search-box bg-gradient-to-br from-[#2b68e0] to-[#e710ea] ">
              <input
                type="text"
                placeholder="Search Your Dream Job"
                className="search-input bg-gradient-to-br from-[#2b68e0] to-[#e710ea]"
              />
              <a href="#" className="search-btn bg-gradient-to-br from-[#2b68e0] to-[#e710ea] text-white border-solid border-2">
                <i><FaSearch></FaSearch></i>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
