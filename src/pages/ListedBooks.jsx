import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
      <div>
        <div className='text-center font-bold text-3xl text-[#131313] border rounded-2xl bg-[#1313130D] py-8 mb-8'>
          <h2>Book</h2>
        </div>

        <div className='mx-[120px] lg:mx-[550px] '>
          <select className='select select-bordered join-item text-white  text-lg font-semibold  bg-[#23BE0A]  rounded-lg '>
            <option className='bg-white text-gray-400'  selected>
              Filter
            </option>
            <option className='bg-white text-black'>Ratings</option>
            <option className='bg-white text-black'>Number of Pages</option>
            <option className='bg-white text-black'>Publish Year</option>
          </select>
        </div>

        <div className='flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap  text-gray-800'>
          <Link
            to={``}
            onClick={() => setTabIndex(0)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border-2 border-b-0" : "border-b-2"
            }  `}>
           
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlists`}
            onClick={() => setTabIndex(1)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border-2 border-b-0" : "border-b-2"
            }  `}>
         
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default ListedBooks;