// src/components/Bestsellers.jsx
import React from 'react';
import './Bestsellers.css';

const Bestsellers = () => {
  const bestsellers = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", rank: 1, weeks: 42 },
    { id: 2, title: "Where the Crawdads Sing", author: "Delia Owens", rank: 2, weeks: 150 },
    { id: 3, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", rank: 3, weeks: 85 },
    { id: 4, title: "Atomic Habits", author: "James Clear", rank: 4, weeks: 120 },
    { id: 5, title: "It Ends with Us", author: "Colleen Hoover", rank: 5, weeks: 95 },
  ];

  return (
    <div className="bestsellers-page">
      <header className="bestsellers-header">
        <h1>Bestsellers</h1>
        <p className="bestsellers-subtitle">Discover this week's top-selling books across all categories.</p>
      </header>

      <div className="bestsellers-table">
        <div className="table-header">
          <div className="header-cell rank">Rank</div>
          <div className="header-cell title">Book Title</div>
          <div className="header-cell author">Author</div>
          <div className="header-cell weeks">Weeks on List</div>
          <div className="header-cell action">Action</div>
        </div>

        {bestsellers.map(book => (
          <div key={book.id} className="table-row">
            <div className="cell rank">
              <span className="rank-badge">{book.rank}</span>
            </div>
            <div className="cell title">
              <strong>{book.title}</strong>
            </div>
            <div className="cell author">{book.author}</div>
            <div className="cell weeks">{book.weeks} weeks</div>
            <div className="cell action">
              <button className="buy-btn">Buy Now</button>
              <button className="wishlist-btn">♥</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bestsellers-categories">
        <h2>Bestseller Categories</h2>
        <div className="categories-grid">
          <div className="category-card fiction">
            <h3>Fiction</h3>
            <p>Top 20 novels</p>
          </div>
          <div className="category-card non-fiction">
            <h3>Non-Fiction</h3>
            <p>Biographies & memoirs</p>
          </div>
          <div className="category-card children">
            <h3>Children's</h3>
            <p>Books for young readers</p>
          </div>
          <div className="category-card mystery">
            <h3>Mystery & Thriller</h3>
            <p>Suspenseful reads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;