import  { useEffect, useState } from 'react';

const Sorting = () => {
  // Sample array of objects
 const [data, setData] = useState([]);
 useEffect(() => {
   const storedData = localStorage.getItem("books");
   const parsedData = JSON.parse(storedData);

   if (parsedData && Array.isArray(parsedData)) {
     setData(
       parsedData.map((books) => ({
         rating: books.rating,
         bookId:books.bookId
       }))
     );
   }
 }, []);

 
  data.sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <div>
        <h2>Sorted Object Array Example</h2>
        <ul>
          {data.map((item) => (
            <li key={item.rating}>{item.bookId}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sorting;