import React, { useState, useEffect, useCallback } from 'react';
import AuthorSection from '../components/AuthorSection';
import './Home.css';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('literature');

  // دالة جلب الكتب من Google Books API
  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=12`);
      const data = await response.json();
      
      if (data.items) {
        const formattedBooks = data.items.map(item => ({
          id: item.id,
          name: item.volumeInfo.title || 'Untitled',
          author: item.volumeInfo.authors?.[0] || 'Unknown Author',
          price: `$${(Math.random() * 25 + 10).toFixed(2)}`,
          image: item.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://via.placeholder.com/150',
          description: item.volumeInfo.description ? item.volumeInfo.description.substring(0, 100) + '...' : 'No description available.'
        }));
        setBooks(formattedBooks);
      }
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="header shadow-lg text-center py-5 mb-5" style={{ background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', color: 'white', borderRadius: '0 0 50px 50px' }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Classic BookStore</h1>
          <p className="lead">Your ultimate destination for world-class literature and timeless stories.</p>
        </div>
      </header>

      {/* Books Grid Section */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-5 mt-4">Featured Collection</h2>
        
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Loading our library...</p>
          </div>
        ) : (
          <div className="row g-4">
            {books.map(book => (
              <div key={book.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card h-100 border-0 shadow hover-card" style={{ transition: 'transform 0.3s', borderRadius: '15px', overflow: 'hidden' }}>
                  <img src={book.image} className="card-img-top" alt={book.name} style={{ height: '300px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h6 className="fw-bold text-dark mb-1">{book.name}</h6>
                    <p className="text-muted small mb-2">By {book.author}</p>
                    <p className="card-text small text-secondary flex-grow-1">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary">{book.price}</span>
                      <button className="btn btn-dark btn-sm rounded-pill px-3">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Authors Section */}
      <div className="bg-light py-5">
        <AuthorSection />
      </div>
    </div>
  );
}

export default Home;