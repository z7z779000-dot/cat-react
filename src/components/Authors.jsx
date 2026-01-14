// src/components/Authors.jsx
import React from 'react';
import './Authors.css';

const Authors = () => {
  const authors = [
    { id: 1, name: "William Shakespeare", nationality: "British", books: 37, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop" },
    { id: 2, name: "Jane Austen", nationality: "British", books: 6, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop" },
    { id: 3, name: "Ernest Hemingway", nationality: "American", books: 10, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop" },
    { id: 4, name: "Gabriel Garcia Marquez", nationality: "Colombian", books: 25, image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=500&fit=crop" },
    { id: 5, name: "J.K. Rowling", nationality: "British", books: 15, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=500&fit=crop" },
    { id: 6, name: "Haruki Murakami", nationality: "Japanese", books: 14, image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?w=400&h=500&fit=crop" },
  ];

  return (
    <div className="authors-page">
      <header className="authors-header">
        <h1>Literary Legends</h1>
        <p className="authors-subtitle">Explore the lives and works of the world's most influential authors.</p>
        
        <div className="authors-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search authors by name or nationality..."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <label htmlFor="genre-filter">All Genres ▼</label>
            </div>
            <div className="filter-group">
              <label htmlFor="sort-filter">Sort by Name ▼</label>
            </div>
          </div>
        </div>
      </header>

      <div className="authors-container">
        <div className="authors-grid">
          {authors.map(author => (
            <div key={author.id} className="author-card">
              <div className="author-image-container">
                <img src={author.image} alt={author.name} className="author-image" />
              </div>
              <div className="author-info">
                <h3 className="author-name">{author.name}</h3>
                <p className="author-nationality">{author.nationality}</p>
                <p className="author-books">{author.books} published works</p>
                <button className="view-works-btn">View Literary Works</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="authors-footer">
        <p>Click on any author to discover their literary legacy.</p>
      </div>
    </div>
  );
};

export default Authors;