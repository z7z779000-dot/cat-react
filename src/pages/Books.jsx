// import React, { useState, useEffect } from 'react';

// function Books() {
//   const [books, setBooks] = useState([]);
//   const [category, setCategory] = useState('all');
//   const [loading, setLoading] = useState(true);

//   // جلب البيانات عند تغيير التصنيف
//   useEffect(() => {
//     setLoading(true);
//     const query = category === 'all' ? 'subject:fiction' : `subject:${category}`;
    
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`)
//       .then(res => res.json())
//       .then(data => {
//         setBooks(data.items || []);
//         setLoading(false);
//       })
//       .catch(err => console.error("Error fetching books:", err));
//   }, [category]);

//   return (
//     <div className="container py-5">
//       <div className="text-center mb-5">
//         <h2 className="display-4 fw-bold">Explore Our Library</h2>
//         <p className="lead text-muted">Find your next favorite story among thousands of titles</p>
//       </div>

//       {/* أزرار التصفية - Filter Buttons */}
//       <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
//         {['all', 'fiction', 'history', 'science', 'poetry', 'biography'].map(cat => (
//           <button 
//             key={cat}
//             className={`btn ${category === cat ? 'btn-warning' : 'btn-outline-dark'} text-capitalize`}
//             onClick={() => setCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* شبكة الكتب - Books Grid */}
//       {loading ? (
//         <div className="text-center my-5">
//           <div className="spinner-border text-warning" role="status"></div>
//           <p className="mt-2">Searching the shelves...</p>
//         </div>
//       ) : (
//         <div className="row g-4">
//           {books.map(book => (
//             <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
//               <div className="card h-100 border-0 shadow-sm hover-up">
//                 <img 
//                   src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Cover'} 
//                   className="card-img-top" 
//                   alt={book.volumeInfo.title}
//                   style={{ height: '300px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body p-3">
//                   <h6 className="card-title fw-bold mb-1 text-truncate" title={book.volumeInfo.title}>
//                     {book.volumeInfo.title}
//                   </h6>
//                   <p className="card-text small text-muted mb-3">
//                     {book.volumeInfo.authors?.[0] || 'Unknown Author'}
//                   </p>
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     <span className="text-warning fw-bold">${(Math.random() * 20 + 5).toFixed(2)}</span>
//                     <button className="btn btn-sm btn-outline-warning">
//                       <i className="bi bi-cart-plus"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Books;

// 

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Books.css"; 

function Books() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const query = category === 'all' ? 'subject:fiction' : `subject:${category}`;
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`)
      .then(res => res.json())
      .then(data => {
        const formattedBooks = (data.items || []).map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.[0] || 'Unknown Author',
          image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/400x600',
        }));
        setBooks(formattedBooks);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container py-5 mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Explore Our Library</h1>
        <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
          {['all', 'fiction', 'history', 'science', 'poetry', 'biography'].map(cat => (
            <button 
              key={cat}
              className={`btn ${category === cat ? 'btn-warning shadow-sm' : 'btn-outline-dark'} text-capitalize px-4`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div className="text-center my-5 py-5"><div className="spinner-border text-warning"></div></div>
      ) : (
        <div className="row g-4">
          {books.map(book => (
            <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
              {/* الرابط السحري اللي يفتح القصة */}
              <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card h-100 border-0 shadow-sm hover-up">
                  <img src={book.image} className="card-img-top" style={{ height: '350px', objectFit: 'cover' }} />
                  <div className="card-body p-3 text-center">
                    <h6 className="fw-bold mb-1 text-truncate">{book.title}</h6>
                    <button className="btn btn-dark btn-sm w-100 mt-2">Read Story</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;