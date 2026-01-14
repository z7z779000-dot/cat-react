import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    
    return stars;
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-genre">{book.genre}</div>
      </div>
      
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        
        <div className="book-rating">
          <div className="stars">
            {renderStars(book.rating)}
            <span className="rating-value">{book.rating}/5</span>
          </div>
        </div>
        
        <div className="book-footer">
          <span className="book-price">{book.price}</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;