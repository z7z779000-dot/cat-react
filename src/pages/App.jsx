// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Form from "./components/Form.jsx";
// import Home from "./Home.jsx";
// import AuthorSection from "./components/AuthorSection.jsx";
// import Books from "./components/Books.jsx";  // إضافة صفحة الكتب
// import Authors from "./components/Authors.jsx"; // إضافة صفحة المؤلفين
// import Bestsellers from "./components/Bestsellers.jsx"; // إضافة الأكثر مبيعًا
// import About from "./components/About.jsx"; // إضافة صفحة من نحن
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Header />
//         <main className="main-content">
//           <Routes>
//             <Route 
//               path="/" 
//               element={
//                 <>
//                   <Home />
//                   <AuthorSection />
//                   <Form />
//                 </>
//               } 
//             />
            
//             {/* صفحة الكتب - تم إضافتها الآن */}
//             <Route path="/books" element={<Books />} />
            
//             {/* صفحة المؤلفين - تم إضافتها الآن */}
//             <Route path="/authors" element={<Authors />} />
            
//             {/* صفحة الأكثر مبيعًا - تم إضافتها الآن */}
//             <Route path="/bestsellers" element={<Bestsellers />} />
            
//             {/* صفحة من نحن - تم إضافتها الآن */}
//             <Route path="/about" element={<About />} />
            
//             {/* صفحات إضافية للموقع */}
//             <Route path="/cart" element={<div>Shopping Cart - Coming Soon</div>} />
//             <Route path="/wishlist" element={<div>Wishlist - Coming Soon</div>} />
//             <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
//             <Route path="/register" element={<div>Register Page - Coming Soon</div>} />
//             <Route path="/profile" element={<div>Profile Page - Coming Soon</div>} />
//             <Route path="/orders" element={<div>Orders Page - Coming Soon</div>} />
            
//             {/* صفحة 404 للرابط غير الموجود */}
//             <Route path="*" element={<div>404 - Page Not Found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import Home from "./Home.jsx";
// import Books from "./Books.jsx";
// import AuthorSection from "../components/AuthorSection.jsx";
// import "./App.css";
// import Contact from "../components/Conact.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <Header />
//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/books" element={<Books />} />
//             <Route path="/authors" element={<AuthorSection />} />
//             <Route path="/contact" element={<Contact />} />
            
//             {/* صفحة 404 في حال تعذر العثور على الرابط */}
//             <Route path="*" element={<div className="text-center py-5">404 - Page Not Found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import Home from "./Home.jsx";
// import Books from "./Books.jsx";
// import BookDetails from "./BookDetails.jsx"; // 1. استيراد الصفحة الجديدة
// import AuthorSection from "../components/AuthorSection.jsx";
// import "./App.css";
// import Contact from "../components/Conact.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <Header />
//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/books" element={<Books />} />
//             <Route path="/authors" element={<AuthorSection />} />
//             <Route path="/contact" element={<Contact />} />
            
//             {/* 2. إضافة مسار تفاصيل الكتاب وقراءته */}
//             <Route path="/book/:id" element={<BookDetails />} />
            
//             <Route path="*" element={<div className="text-center py-5">404 - Page Not Found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { useState } from 'react';
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import Home from "./Home.jsx";
// import Books from "./Books.jsx";
// import BookDetails from "./BookDetails.jsx";
// import AuthorSection from "../components/AuthorSection.jsx";
// import Contact from "../components/Conact.jsx";
// import "./App.css";

// function App() {
//   // 1. وضعنا البيانات هنا في الأب (App) عشان كل الصفحات تشوفها
//   const [books] = useState([
//     {
//       id: 1,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       genre: "Classic",
//       price: "$12.99",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
//       rating: 4.8,
//       story: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. It explores the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred."
//     },
//     {
//       id: 2,
//       title: "1984",
//       author: "George Orwell",
//       genre: "Dystopian",
//       price: "$10.99",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
//       rating: 4.7,
//       story: "Winston Smith reinvents a rebellion against a totalitarian world. Oceania is a society in which the individual is always under surveillance and the Thought Police punish any independent thinking."
//     },
//     {
//       id: 3,
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       genre: "Classic",
//       price: "$11.50",
//       image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
//       rating: 4.6,
//       story: "The novel chronicles an era that Fitzgerald himself dubbed the Jazz Age. Set on Long Island, it depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby."
//     },
//     {
//       id: 4,
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       genre: "Romance",
//       price: "$9.99",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
//       rating: 4.8,
//       story: "Elizabeth Bennet is the protagonist who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
//     },
//     {
//       id: 5,
//       title: "The Catcher in the Rye",
//       author: "J.D. Salinger",
//       genre: "Literary Fiction",
//       price: "$13.25",
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
//       rating: 4.5,
//       story: "Holden Caulfield, a teenager from New York City, becomes an icon for teenage rebellion and angst. The story captures the protagonist's sense of alienation in a 'phony' world."
//     },
//     {
//       id: 6,
//       title: "The Hobbit",
//       author: "J.R.R. Tolkien",
//       genre: "Fantasy",
//       price: "$14.99",
//       image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
//       rating: 4.9,
//       story: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry. But his contentment is disturbed when the wizard Gandalf appears."
//     }
//   ]);

//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <Header />
//         <main className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
            
//             {/* 2. نمرر البيانات لصفحة الكتب */}
//             <Route path="/books" element={<Books allBooks={books} />} />
            
//             <Route path="/authors" element={<AuthorSection />} />
//             <Route path="/contact" element={<Contact />} />
            
//             {/* 3. نمرر البيانات لصفحة التفاصيل عشان تبحث فيها */}
//             <Route path="/book/:id" element={<BookDetails books={books} />} />
            
//             <Route path="*" element={<div className="text-center py-5">404 - Page Not Found</div>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Home from "./Home.jsx";
import Books from "./Books.jsx";
import BookDetails from "./BookDetails.jsx";
import AuthorSection from "../components/AuthorSection.jsx";
import Contact from "../components/Conact.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<AuthorSection />} />
            <Route path="/contact" element={<Contact />} />
            {/* هذا المسار هو الأهم، تأكد إنه مكتوب كذا بالضبط */}
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="*" element={<div className="text-center py-5">404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;