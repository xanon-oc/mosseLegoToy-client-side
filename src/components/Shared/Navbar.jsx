import { Link, NavLink } from "react-router-dom";
import logo from "/moose.png";
import userLogo from "/user.png";
import ThirdPartyLogin from "./ThirdPartyLogin";
import { Tooltip } from "react-tooltip";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then(() => {});
  };
  return (
    <div className="navbar bg-[aliceblue] lg:bg-opacity-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="/allToys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/myToys">My Toys</NavLink>
            </li>
            <li>
              <NavLink to="/addAToy">Add A Toy</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link className="flex items-center font-bold button-view " to="/">
            <img src={logo} className="w-10" alt="logo" />
            <p> moose</p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 btn  uppercase font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink to="/allToys">All Toys</NavLink>
          </li>
          {user && (
            <div className="flex">
              <li>
                <NavLink to="/myToys">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/addAToy">Add A Toy</NavLink>
              </li>
            </div>
          )}
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex">
          {!user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userLogo} />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60"
              >
                <Link to="/login">
                  <button className="normal-signin">Sign in</button>
                </Link>
                <div className="instruction-text">Don't have an Account?</div>
                <Link to="/register">
                  <button className="create-account">Create Account</button>
                </Link>
                <div className="instruction-text mb-2">Or sign in with</div>
                <div className="mb-4">
                  <ThirdPartyLogin />
                </div>
              </ul>
            </div>
          )}

          {user && (
            <div className="">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    data-tooltip-id="my-tooltip2"
                    data-tooltip-content={user.displayName}
                    className="w-10 rounded-full "
                  >
                    <img className="w-10" src={user.photoURL} />
                    <Tooltip place="left" id="my-tooltip2" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <button onClick={() => handleLogOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
