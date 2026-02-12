// import React from 'react';
// import { useParams } from 'react-router-dom';

// const BookDetails = ({ books }) => {
//   const { id } = useParams(); // يجلب معرف الكتاب من الرابط
//   const book = books.find((b) => b.id === parseInt(id));

//   if (!book) return <h2 className="text-center my-5">Book not found!</h2>;

//   return (
//     <div className="container my-5 py-5">
//       <div className="row">
//         <div className="col-md-4">
//           <img src={book.image} className="img-fluid rounded shadow" alt={book.title} />
//         </div>
//         <div className="col-md-8">
//           <h1 className="fw-bold">{book.title}</h1>
//           <p className="text-muted fs-5">By {book.author}</p>
//           <hr />
//           <h4 className="mt-4">Full Story / Content:</h4>
//           <p className="lh-lg" style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
//             {book.fullDescription} {/* هنا يظهر النص الكامل للقصة */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// // سنمرر مصفوفة الكتب كـ Props لهذه الصفحة
// const BookDetails = ({ books }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // البحث عن الكتاب بناءً على الرقم الموجود في الرابط
//   const book = books.find((b) => b.id === parseInt(id));

//   // إذا لم يعثر على الكتاب
//   if (!book) {
//     return (
//       <div className="container text-center my-5 py-5">
//         <h2 className="text-danger">Oops! Story not found.</h2>
//         <button className="btn btn-dark mt-3" onClick={() => navigate('/books')}>Back to Library</button>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-5 py-5" style={{ minHeight: '80vh' }}>
//       <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
//         <i className="bi bi-arrow-left me-2"></i> Back
//       </button>
      
//       <div className="row g-5">
//         <div className="col-md-5">
//           <div className="shadow-lg p-2 rounded-4 bg-white">
//             <img src={book.image} alt={book.title} className="img-fluid rounded-4 w-100" />
//           </div>
//         </div>
        
//         <div className="col-md-7">
//           <h1 className="display-4 fw-bold text-dark mb-2">{book.title}</h1>
//           <h4 className="text-muted mb-4">By <span className="text-primary">{book.author}</span></h4>
//           <div className="d-flex gap-3 mb-4">
//              <span className="badge bg-dark fs-6 px-3 py-2">{book.genre}</span>
//              <span className="text-warning fs-5 fw-bold">★ {book.rating} / 5</span>
//           </div>
          
//           <div className="p-4 bg-light rounded-4 border">
//             <h3 className="fw-bold mb-3"><i className="bi bi-book me-2"></i> Full Story</h3>
//             <p className="lh-lg fs-5 text-secondary" style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
//               {book.story}
//             </p>
//           </div>
          
//           <div className="mt-5 d-flex gap-3">
//             <button className="btn btn-primary btn-lg px-5 shadow">Add to Cart {book.price}</button>
//             <button className="btn btn-outline-dark btn-lg px-4"><i className="bi bi-heart"></i> Wishlist</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // جلب بيانات الكتاب الواحد من جوجل باستخدام الـ ID
//     fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setBook(data);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div className="text-center py-5">Loading Story...</div>;

//   const info = book.volumeInfo;

//   return (
//     <div className="container py-5 mt-5">
//       <button className="btn btn-link text-dark mb-4" onClick={() => navigate(-1)}>← Back</button>
//       <div className="row">
//         <div className="col-md-4">
//           <img src={info.imageLinks?.thumbnail} className="img-fluid shadow rounded" alt={info.title} style={{width: '100%'}} />
//         </div>
//         <div className="col-md-8">
//           <h1 className="fw-bold">{info.title}</h1>
//           <p className="text-primary fs-5">By {info.authors?.join(', ')}</p>
//           <hr />
//           <h4 className="fw-bold">The Story</h4>
//           {/* dangerouslySetInnerHTML لأن جوجل ترسل الوصف أحياناً بأكواد HTML */}
//           <div 
//             className="lh-lg text-secondary" 
//             dangerouslySetInnerHTML={{ __html: info.description || "No description available for this book." }} 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false); // أضفنا حالة للخطأ
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     // جلب بيانات الكتاب الواحد من جوجل باستخدام الـ ID
//     fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then(data => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error:", err);
//         setError(true);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return (
//     <div className="container text-center py-5 mt-5">
//       <div className="spinner-border text-primary" role="status"></div>
//       <p className="mt-2">Fetching the story details...</p>
//     </div>
//   );

//   if (error || !book || !book.volumeInfo) return (
//     <div className="container text-center py-5 mt-5">
//       <h3 className="text-danger">Sorry, could not load the story.</h3>
//       <button className="btn btn-dark mt-3" onClick={() => navigate('/books')}>Back to Library</button>
//     </div>
//   );

//   const info = book.volumeInfo;

//   return (
//     <div className="container py-5 mt-5 shadow-sm bg-white rounded">
//       <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>
//         <i className="bi bi-arrow-left"></i> Back to Library
//       </button>
      
//       <div className="row g-4">
//         <div className="col-md-4 text-center">
//           <img 
//             src={info.imageLinks?.medium || info.imageLinks?.thumbnail || 'https://via.placeholder.com/300x450?text=No+Cover'} 
//             className="img-fluid shadow-lg rounded" 
//             alt={info.title} 
//             style={{ maxHeight: '450px', width: 'auto' }} 
//           />
//         </div>
        
//         <div className="col-md-8">
//           <h1 className="fw-bold display-5">{info.title}</h1>
//           <p className="text-muted fs-4">By: <span className="text-primary">{info.authors?.join(', ') || 'Unknown Author'}</span></p>
//           <div className="d-flex gap-2 mb-3">
//              {info.categories?.map((cat, i) => (
//                <span key={i} className="badge bg-secondary">{cat}</span>
//              ))}
//           </div>
//           <hr />
//           <h3 className="fw-bold mb-3">Book Description</h3>
//           {/* عرض الوصف النصي أو "القصة" */}
//           <div 
//             className="lh-lg text-dark fs-5 p-3 bg-light rounded" 
//             style={{ textAlign: 'justify' }}
//             dangerouslySetInnerHTML={{ __html: info.description || "The publisher hasn't provided a summary for this book yet." }} 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // تأكد من وجود هذه الكلمة لأنها ضرورية للـ App.jsx ليجده
// export default BookDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // جلب القصة بالـ ID من جوجل
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-5 mt-5">Loading Story...</div>;
  if (!book) return <div className="text-center py-5">Story Not Found!</div>;

  const info = book.volumeInfo;

  return (
    <div className="container py-5 mt-5 bg-white shadow rounded">
      <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>← Back</button>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={info.imageLinks?.thumbnail} className="img-fluid shadow rounded" alt={info.title} />
        </div>
        <div className="col-md-8">
          <h1 className="fw-bold">{info.title}</h1>
          <hr />
          <h4 className="fw-bold text-primary">Story:</h4>
          {/* هنا تظهر القصة أخيراً */}
          <div 
            className="lh-lg fs-5 text-secondary" 
            dangerouslySetInnerHTML={{ __html: info.description || "No story available." }} 
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;