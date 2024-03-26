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
          {/* <a className='relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-500 rounded-lg group'>
            <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56'></span>
            <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
            <span className='relative'>Sign IN</span>
          </a> */}
          ;
        </div>
      </div>
    );
};

export default Navbar;

