import {NavLink } from "react-router-dom";

const allLink = (
  <>
    <NavLink
      to='/'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal  px-5 py-3"
      }>
      Home
    </NavLink>
    <NavLink
      to='/ListedBooks'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal  px-5 py-3"
      }>
      Listed Books
    </NavLink>
    <NavLink
      to='/PagesToRead'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold  rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal px-5 py-3"
      }>
      Pages To Read
    </NavLink>
  </>
);

const Navbar = () => {
    return (
      <div className='navbar bg-white '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52'>
              {allLink}
            </ul>
          </div>
          <button>
            <NavLink to='/' className='text-3xl font-bold text-[#131313] '>
              Book Library
            </NavLink>
          </button>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{allLink}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn bg-[#23BE0A] rounded-lg text-white font-semibold py-4 px-6 mr-4'>
            Sign In
          </a>
          <a className='btn bg-[#59C6D2] rounded-lg text-white font-semibold py-4 px-6 mr-0'>
            Sign Up
          </a>
        </div>
      </div>
    );
};

export default Navbar;