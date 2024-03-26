import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishBook } from "../utility/localStorage";

const SingleBookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const IdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === IdInt);
  console.log(book);

  const handleAddRead = book =>{
    // console.log(book);
    saveBook(book);
  }
  const handleWishlists = book=>{
    saveWishBook(book);
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-12 '>
        <div className='w-full lg:w-1/2 bg-[#23BE0A0D] rounded-2xl items-center p-16 flex   justify-center'>
          <img className='w-4/5 ' src={book.image} alt='' />
        </div>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-[40px] font-bold text-[#131313]'>
            {book.bookName}
          </h2>

          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            By: {book.author}
          </p>
          <div className='divide-y-2 divide-dashed divide-gray-500'>
            <div></div>
            <div>
              <p className='text-xl font-medium text-[#131313CC] my-4'>
                {book.category}
              </p>
            </div>
            <div></div>
          </div>

          <p className='my-6'>
            <span className='font-bold text-[#131313]'>Review</span>{" "}
            <span className='text-[#131313B2] font-normal'>{book.review}</span>{" "}
          </p>

          <div className='bg-white flex gap-3 items-center'>
            <p className='text-[#131313] font-bold text-base'>Tag: </p>
            <p className='text-[#23BE0A] w-max rounded-3xl font-medium text-base px-4 py-2 bg-gray-200'>
              #{book.tags[0]}
            </p>
            <p className='text-[#23BE0A] w-max rounded-3xl font-medium text-base px-4 py-2 bg-gray-200'>
              #{book.tags[1]}
            </p>
          </div>

          <div className='divide-y-2 divide-dashed divide-gray-500 my-6'>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='flex flex-row text-base gap-6'>
            <div className='text-[#131313B2] space-y-3'>
              <div>Number of Pages:</div>
              <div>Publisher:</div>
              <div>Year of Publishing:</div>
              <div>Rating:</div>
            </div>

            <div className='text-[#131313] space-y-3 font-semibold'>
              <div>{book.totalPages}</div>
              <div>{book.publisher}</div>
              <div>{book.yearOfPublishing}</div>
              <div>{book.rating}</div>
            </div>
          </div>

          <button
            onClick={() => handleAddRead(book)}
            className='mr-6 mt-8 text-lg font-semibold text-[#131313] border border-[#1313134D] px-7 py-4 rounded-lg hover:text-white transition delay-100 hover:bg-[#23BE0A]'>
            Read
          </button>
          <button
            onClick={() => handleWishlists(book)}
            className='mt-8 text-lg font-semibold text-[#131313] border border-[#1313134D] px-7 py-4 rounded-lg hover:text-white transition delay-100 hover:bg-[#23BE0A]'>
            Wishlist Books
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleBookDetails;
