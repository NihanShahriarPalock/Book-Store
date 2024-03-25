
const link = (
  <>
    <li>
      <a>Item 1</a>
    </li>
    <li>
      <a>Item 2</a>
    </li>
    <li>
      <a>Item 3</a>
    </li>
  </>
);

const Navbar = () => {
    return (
      <div className='navbar bg-base-100'>
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
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              {link}
            </ul>
          </div>
          <a className='text-3xl font-bold text-[#131313] '>Book Library</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{link}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn bg-[#23BE0A] rounded-lg text-white font-semibold py-4 px-6 mr-4'>
            Sign In
          </a>
          <a className='btn bg-[#59C6D2] rounded-lg text-white font-semibold py-4 px-6'>
            Sign Up
          </a>
        </div>
      </div>
    );
};

export default Navbar;