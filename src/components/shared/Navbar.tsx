import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/hamburger.svg";
import close from "../../assets/images/close.svg";
import { useState } from "react";
import cn from "../../utils/cn";
import loginIcon from "../../assets/images/login-icon.svg";
import logoutIcon from "../../assets/images/logout.svg";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {currentToken, logoutUser} from "../../redux/features/auth/authSlice";
import {toast} from "sonner";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const token = useAppSelector(currentToken)
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
    toast.success('Logout successfully', {duration: 2000})
  }

  return (
    <div className="bg-black md:bg-brand border-b-2 border-primary">
      <div className="custom-container py-5 bg-brand">
        <div className="">
          <nav className="flex justify-between items-center">
            <div>
              <NavLink to="/" end>
                <img src={logo} alt="Logo" className="h-7 md:h-8" />
              </NavLink>
            </div>
            <div
              className={cn(
                "w-0 md:w-auto small-device-collapse-nav bg-brand bg-opacity-50 md:bg-opacity-100",
                { "w-full": expand }
              )}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-[70%] md:w-full h-screen md:h-auto bg-offWhite md:bg-transparent">
                {expand && (
                  <div className="absolute right-6 top-5 block md:hidden">
                    <button
                      onClick={() => setExpand(!expand)}
                      className="bg-primary bg-opacity-90 transition-all duration-150 hover:bg-opacity-100 rounded p-[5px]"
                    >
                      <img src={close} alt="Close" className="h-4" />
                    </button>
                  </div>
                )}
                <div className="pl-5 pb-5 block md:hidden bg-brand w-full pt-6 border-b-2 border-primary">
                  <img src={logo} alt="Logo" className="h-7" />
                </div>
                <NavLink to="/" className='nav-item' end>
                  Home
                </NavLink>
                <NavLink to="/trending" className="nav-item" end>
                  Trending
                </NavLink>

                <NavLink to="/recommended" className="nav-item" end>
                  Recommended
                </NavLink>
                {
                  !token && 
                  <NavLink to="/login" className="nav-item flex items-center gap-1 ">
                    <img src={loginIcon} alt="Login" className="h-5" />
                    <span>Login</span>
                  </NavLink>
                }

                {
                  token && 
                  <button onClick={handleLogout} className="nav-item flex items-center gap-1 ">
                    <img src={logoutIcon} alt="Logout" className="h-4" />
                    <span>Logout</span>
                  </button>
                }
              </div>
            </div>
            <div className="block md:hidden">
              <button onClick={() => setExpand(!expand)}>
                <img src={hamburger} alt="Menu" className="h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
