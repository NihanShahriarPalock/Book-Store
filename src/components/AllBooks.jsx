import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const AllBooks = () => {

    const books=useLoaderData();
    // console.log(books);



    return (
      <div>
        <h2 className='font-bold text-4xl text-center text-[#131313] mt-6 lg:mt-20 mb-4 lg:mb-9 '>Books</h2>
        <div className='grid grid-cols-3  gap-5'>
          {books.map((book) => (
            <BookCard key={book.bookId} book={book}></BookCard>
          ))}
        </div>
      </div>
    );
};

export default AllBooks;