import React, { useState } from 'react';
import BookCard from './BookCard';
import './Books.css';

const Books = () => {
  // بيانات عينة للكتب
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      rating: 4.8
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
      rating: 4.7
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      price: "$11.50",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      rating: 4.6
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
      rating: 4.8
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Literary Fiction",
      price: "$13.25",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
      rating: 4.5
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
      rating: 4.9
    }
  ]);

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', 'Classic', 'Dystopian', 'Romance', 'Literary Fiction', 'Fantasy'];

  // تصفية الكتب حسب البحث والنوع
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    let filtered = books;
    
    if (term.trim() !== '') {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(term.toLowerCase()) || 
        book.author.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    if (selectedGenre !== 'All Genres') {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }
    
    setFilteredBooks(filtered);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    
    let filtered = books;
    
    if (genre !== 'All Genres') {
      filtered = filtered.filter(book => book.genre === genre);
    }
    
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredBooks(filtered);
  };

  return (
    <div className="books-page">
      {/* هيدر الصفحة */}
      <header className="books-header">
        <h1>Our Book Collection</h1>
        <p className="books-subtitle">Discover a world of literary masterpieces from renowned authors across all genres.</p>
        
        {/* شريط البحث والتصفية */}
        <div className="books-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search books by title or author..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="genre-filter">
            <label htmlFor="genre-select">Filter by Genre:</label>
            <select 
              id="genre-select"
              value={selectedGenre}
              onChange={(e) => handleGenreChange(e.target.value)}
              className="genre-select"
            >
              {genres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* عرض عدد النتائج */}
      <div className="results-info">
        <p>Showing {filteredBooks.length} of {books.length} books</p>
      </div>

      {/* عرض الكتب */}
      <div className="books-container">
        {filteredBooks.length > 0 ? (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="no-books">
            <p>No books found matching your criteria. Try a different search.</p>
          </div>
        )}
      </div>

      {/* بنر الترويج */}
      <div className="promo-banner">
        <div className="promo-content">
          <h3>FREE SHIPPING on orders over $50</h3>
          <p>Enjoy free shipping on all book orders above $50. Start building your library today!</p>
          <button className="browse-button">Browse All Books</button>
        </div>
      </div>
    </div>
  );
};

export default Books;