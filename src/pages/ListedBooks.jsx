import { Link } from "react-router-dom";


const ListedBooks = () => {
    return (
      <div >
        <div className='text-center font-bold text-3xl text-[#131313] border rounded-2xl bg-[#1313130D] py-8 mb-8'>
          <h2>Book</h2>
        </div>
        <div className='flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap bg-gray-100 text-gray-800'>
          <Link
            to='./'
            className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-600 text-gray-600'>
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
            to='/wishlist'
            className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-600 text-gray-900'>
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
      </div>
    );
};

export default ListedBooks;