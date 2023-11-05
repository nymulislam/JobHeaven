import { BsFacebook } from 'react-icons/bs'
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
      <footer className="relative shadow-2xl pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-4xl font-semibold
              bg-clip-text text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea]">
                Let&apos;s keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2">
              Connect with us on your preferred platforms; <br /> we&apos;ll reply within 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaXTwitter className="h-8 w-10"></FaXTwitter>
                </button>
                <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <BsFacebook className='h-8 w-10'></BsFacebook>
                </button>
                <button
                  className="bg-whit shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                    <BsGithub className='h-8 w-10'></BsGithub>
                </button>
                <button
                  className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaLinkedinIn className='h-8 w-10'></FaLinkedinIn>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-base text-gray-600 font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className=" font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-base text-gray-600 font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-base text-gray-600 font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                >
                  {" "}
                  JobHeaven by{" "}
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className=""
                >
                  NYM
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
