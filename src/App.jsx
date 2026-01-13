// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Home from "./Home.jsx";
import AuthorSection from "./components/AuthorSection.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Home />
                  <AuthorSection />
                  <Form />
                </>
              } 
            />
            
            {/* صفحات إضافية للموقع */}
            <Route path="/books" element={<div>Books Page - Coming Soon</div>} />
            <Route path="/authors" element={<div>Authors Page - Coming Soon</div>} />
            <Route path="/cart" element={<div>Shopping Cart - Coming Soon</div>} />
            <Route path="/wishlist" element={<div>Wishlist - Coming Soon</div>} />
            <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
            <Route path="/register" element={<div>Register Page - Coming Soon</div>} />
            <Route path="/profile" element={<div>Profile Page - Coming Soon</div>} />
            <Route path="/orders" element={<div>Orders Page - Coming Soon</div>} />
            <Route path="/about" element={<div>About Us - Coming Soon</div>} />
            <Route path="/bestsellers" element={<div>Bestsellers - Coming Soon</div>} />
            
            {/* صفحة 404 للرابط غير الموجود */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;