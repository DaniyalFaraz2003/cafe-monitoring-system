import React from "react";
import "./DashboardNavbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { signout } from "../../redux/avltreeReducer";
import { useDispatch } from "react-redux";

function DashboardNavbar() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
    window.location = '/';
  }

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="contour software logo" style={{ width: '250px', height: '120px' }} />
      </div>
      <div className="navbar-container">
        <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
              {/* Add any content here if needed */}
            </div>
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">

                <li className="item block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    to="/Dashboard"
                    className="flex items-center transition-colors hover:text-blue-500"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="item block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    to="/UserEntryForm"
                    className="flex items-center transition-colors hover:text-blue-500"
                  >
                    User Entry
                  </Link>
                </li>
            <li class="item block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <Link
                to="/adminpanel"
                class="flex items-center transition-colors hover:text-blue-500"
              >
                Admin Panel
              </Link>
            </li>

                <li className="item block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    to="/Report"
                    className="flex items-center transition-colors hover:text-blue-500"
                  >
                    Report
                  </Link>
                </li>
                <li className="item block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  <Button
                    className="flex items-center gap-2 bg-[#0a5282]"
                    size="sm"
                    onClick={logout}
                  >
                    LOGOUT
                    <IconButton aria-label="logout">
                      <LogoutIcon />
                    </IconButton>
                  </Button>
                </li>
              </ul>
            </div>
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default DashboardNavbar;


