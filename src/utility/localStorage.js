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
    
    if(isExist){
        return toast.error("Already Added to Read List")
    }
    else{
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books));
        toast.success("Added to Read List")
    }
}


export const getWishBooks = () => {
    let wishBooks = []
    const storeWishBooks = localStorage.getItem('wishBooks')
    if (storeWishBooks) {
        wishBooks = JSON.parse(storeWishBooks)
    }

    return wishBooks

}


export const saveWishBook = book => {
    let wishBooks = getWishBooks()
    const isExist = wishBooks.find(b => b.bookId === book.bookId)
    let books = getBooks()
    const isExist1 = books.find(c => c.bookId === book.bookId)


    if (isExist) {
        return toast.error('Already Added in Wish List')
    }
    else if (isExist1) {
        return toast.error('Already Added in Read List')
    }
    wishBooks.push(book)
    localStorage.setItem('wishBooks', JSON.stringify(wishBooks))
    toast.success('New Book Added in Wish List')
}