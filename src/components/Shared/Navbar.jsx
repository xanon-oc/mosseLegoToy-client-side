import logo from "/moose.png";
import userLogo from "/user.png";
const Navbar = () => {
  return (
    <div className="navbar bg-[aliceblue]">
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
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">All Toys</a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add a Toy</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} className="w-24" alt="logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>All Toys</a>
          </li>
          <li>
            <a>My Toys</a>
          </li>
          <li>
            <a>Add a Toy</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex">
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
              <button className="normal-signin">Sign in</button>
              <div className="instruction-text">Don't have an Account?</div>
              <button className="create-account">Create Account</button>
              <div className="instruction-text">Or sign in with</div>
            </ul>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=996&t=st=1684353631~exp=1684354231~hmac=3c5bb6490f3536bfc4ee0f1655784186acae672a4bde92274adb116447895c6e" />
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
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
