import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
      <div>
        <div className='text-center font-bold text-3xl text-[#131313] border rounded-2xl bg-[#1313130D] py-8 mb-8'>
          <h2>Book</h2>
        </div>

        <div className='dropdown left-[150px] lg:left-[600px] mb-16'>
          <div tabIndex={0} role='button'>
            <div className='flex justify-center items-center content-center max-w-fit  bg-[#23BE0A]  rounded-lg px-5 py-3'>
              <div className='text-white text-lg font-semibold'>Sort By </div>
              <div className='flex justify-center items-center ml-3 mt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'>
                  <path
                    d='M19.5 8.25L12 15.75L4.5 8.25'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52'>
            <li >
              <a>Ratings</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>

        <div className='flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap  text-gray-800'>
          <Link
            to={``}
            onClick={() => setTabIndex(0)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border-2 border-b-0" : "border-b-2"
            }  `}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'>
              <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlists`}
            onClick={() => setTabIndex(1)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border-2 border-b-0" : "border-b-2"
            }  `}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'>
              <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
              <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default ListedBooks;