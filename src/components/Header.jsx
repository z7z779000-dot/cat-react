
// // src/components/Header.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartCount] = useState(3); // يمكنك جعل هذا ديناميكياً

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log('Searching for:', searchQuery);
//       setSearchQuery('');
//     }
//   };

//   return (
//     <>
//       {/* Announcement Bar */}
//       <div className="bg-dark text-white py-2">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 text-center text-md-start">
//               <small>
//                 <i className="bi bi-truck text-warning me-1"></i>
//                 <strong>FREE SHIPPING</strong> on orders over $50
//               </small>
//             </div>
//             <div className="col-md-6 text-center text-md-end">
//               <small>
//                 <i className="bi bi-telephone text-warning me-1"></i>
//                 Need help? Call us: <strong>+1 (555) 123-4567</strong>
//               </small>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg">
//         <div className="container">
//           {/* Logo */}
//           <Link className="navbar-brand fw-bold fs-3" to="/">
//             <i className="bi bi-book-half text-warning me-2"></i>
//             <span className="text-warning">Literary</span>
//             <span className="text-white">World</span>
//           </Link>

//           {/* Mobile Toggle */}
//           <button 
//             className="navbar-toggler border-warning" 
//             type="button" 
//             data-bs-toggle="collapse" 
//             data-bs-target="#navbarContent"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Content */}
//           <div className="collapse navbar-collapse" id="navbarContent">
//             {/* Navigation Links */}
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <Link className="nav-link fw-semibold" to="/">
//                   <i className="bi bi-house me-1"></i> Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link fw-semibold" to="/books">
//                   <i className="bi bi-book me-1"></i> Books
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link fw-semibold" to="/authors">
//                   <i className="bi bi-person-badge me-1"></i> Authors
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link fw-semibold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                   <i className="bi bi-tags me-1"></i> Categories
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Classic Literature</a></li>
//                   <li><a className="dropdown-item" href="#">Modern Fiction</a></li>
//                   <li><a className="dropdown-item" href="#">Science Fiction</a></li>
//                   <li><a className="dropdown-item" href="#">Mystery & Thriller</a></li>
//                   <li><a className="dropdown-item" href="#">Romance</a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">View All Categories</a></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link fw-semibold" to="/bestsellers">
//                   <i className="bi bi-award me-1"></i> Bestsellers
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link fw-semibold" to="/about">
//                   <i className="bi bi-info-circle me-1"></i> About
//                 </Link>
//               </li>
//             </ul>

//             {/* Right Side Actions */}
//             <div className="d-flex align-items-center">
//               {/* Search Form */}
//               <form className="d-flex me-3" onSubmit={handleSearch}>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control border-warning"
//                     placeholder="Search books..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     style={{minWidth: '200px'}}
//                   />
//                   <button className="btn btn-warning" type="submit">
//                     <i className="bi bi-search"></i>
//                   </button>
//                 </div>
//               </form>

//               {/* Wishlist */}
//               <Link to="/wishlist" className="btn btn-outline-warning me-2 position-relative">
//                 <i className="bi bi-heart"></i>
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   5
//                 </span>
//               </Link>

//               {/* Cart */}
//               <Link to="/cart" className="btn btn-outline-warning me-3 position-relative">
//                 <i className="bi bi-cart"></i>
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   {cartCount}
//                 </span>
//               </Link>

//               {/* User Account */}
//               <div className="dropdown">
//                 <button 
//                   className="btn btn-warning dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                 >
//                   <i className="bi bi-person-circle me-1"></i> Account
//                 </button>
//                 <ul className="dropdown-menu dropdown-menu-end">
//                   <li>
//                     <Link className="dropdown-item" to="/profile">
//                       <i className="bi bi-person me-2"></i> My Profile
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/orders">
//                       <i className="bi bi-box-seam me-2"></i> My Orders
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/wishlist">
//                       <i className="bi bi-heart me-2"></i> Wishlist
//                     </Link>
//                   </li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li>
//                     <Link className="dropdown-item" to="/login">
//                       <i className="bi bi-box-arrow-in-right me-2"></i> Login
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/register">
//                       <i className="bi bi-person-plus me-2"></i> Register
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
//       <div className="container">
//         <Link className="navbar-brand fw-bold fs-3" to="/">
//           <i className="bi bi-book-half me-2"></i>BookStore
//         </Link>
//         <div className="navbar-nav ms-auto">
//           <Link className="nav-link px-3" to="/">Home</Link>
//           <Link className="nav-link px-3" to="/books">Books</Link>
//           <Link className="nav-link px-3" to="/authors">Authors</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;



import React, { useState } from 'react'; // أضفنا useState
import { Link } from 'react-router-dom';

function Header() {
  // تجربة: لنفترض أن المستخدم سجل دخوله (غير القيمة لـ null لتجربة شكل الـ Login)
  const [user, setUser] = useState({ name: "" }); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="bi bi-book-half me-2"></i>BookStore
        </Link>
        
        <div className="navbar-nav ms-auto align-items-center">
          <Link className="nav-link px-3" to="/">Home</Link>
          <Link className="nav-link px-3" to="/books">Books</Link>
          <Link className="nav-link px-3" to="/authors">Authors</Link>
          {/* إضافة رابط التواصل */}
          <Link className="nav-link px-3" to="/contact">Contact</Link>

          <span className="ms-lg-3">
            {user ? (
              /* إذا كان المستخدم مسجل دخول، يظهر اسمه وأيقونة */
              <div className="text-white bg-primary px-3 py-1 rounded-pill">
                <i className="bi bi-person-circle me-2"></i>
                {user.name}
              </div>
            ) : (
              /* إذا لم يسجل دخول، يظهر زر الـ Login */
              <Link className="btn btn-outline-light px-4" to="/login">
                Login
              </Link>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;