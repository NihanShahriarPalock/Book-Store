import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getBooks=() =>{
 let books = [];
 const storedBooks = localStorage.getItem('books');
 if(storedBooks){
 books=JSON.parse(storedBooks)
 }
 return books;
}


export const saveBook=book=>{
    let books = getBooks();

    const isExist = books.find(b => b.bookId == book.bookId);
    // console.log(typeof b.id);
    if(isExist){
        return toast.error("Already Added")
    }
    else{
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books));
        toast.success("Added to list Item")
    }
}

// export const saveBook = bookId => {
//     let books = getBooks();

//     const isExist = books.find(bid => bid === bookId);
//     // console.log(typeof b.id);
//     if (!isExist) {
//         books.push(bookId);
//         localStorage.setItem('books',JSON.stringify(books));
//         toast.success("Added to list Item")
//     }
//     else{
//         return toast.error("Already Added")
//     }
    
// }