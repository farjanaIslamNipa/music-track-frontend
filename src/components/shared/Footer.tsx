import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import linkedIn from "../../assets/images/linked-in.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
const Footer = () => {
  return (
    <div>
      <div className="bg-brand pt-10 sm:pt-14 pb-5 sm:pb-10 lg:pb-14">
        <div className="custom-container">
          <div className="block sm:flex items-center gap-6 lg:gap-10">
            <div className="mb-5 sm:mb-0">
              <img src={logo} alt="" className="h-8 sm:h-12" />
            </div>
            <div className="w-full">
              <div className="border-l-none sm:border-l border-gray-500 pl-0 sm:pl-6 lg:pl-10">
                <div className="border-b border-gray-500 pb-6 lg:pb-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex justify-start md:justify-center">
                      <NavLink
                        to="/supplies"
                        className="px-4 py-2 text-offWhite"
                      >
                       Trending
                      </NavLink>
                    </div>
                    <div className="border-x-none md:border-x border-gray-500 flex justify-start md:justify-center">
                      <NavLink
                        to="/recommended"
                        className="px-4 py-2 text-offWhite"
                      >
                       Recommended
                      </NavLink>
                    </div>
                    <div className="border-r-none md:border-r border-gray-500 flex justify-start md:justify-center">
                      <NavLink
                        to="/privacy-policy"
                        className="px-4 py-2 text-offWhite"
                      >
                        Terms & Conditions
                      </NavLink>
                    </div>
                    <div className="flex justify-start md:justify-center items-center gap-4">
                      <a href="">
                        <img src={linkedIn} alt="Linkedin" className="h-7" />
                      </a>
                      <a href="">
                        <img src={facebook} alt="Facebook" className="h-7" />
                      </a>
                      <a href="">
                        <img
                          src={instagram}
                          alt="Instagram"
                          className="h-7"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-5">
                  <p className="text-sm mb-0 text-offWhite">
                    <b>Call us:</b> 01700445889
                  </p>
                  <p className="text-sm text-offWhite">
                    <b>Email us:</b> music360@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary p-5">
        <p className="text-center text-sm text-offWhite">
          © {new Date().getFullYear()}. Music360. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
