// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="fw-bold text-warning mb-3">
              <i className="bi bi-book-half me-2"></i>
              Literary World
            </h3>
            <p className="text-light">
              Your ultimate destination for classic and contemporary literature. 
              Discover great authors, explore timeless books, and build your personal library.
            </p>
            <div className="d-flex mt-4">
              <a href="#" className="btn btn-outline-warning me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-warning me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-warning me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-warning">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Books
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Authors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Genres
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right me-1"></i> Bestsellers
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-bookmark me-1"></i> Classic
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-bookmark me-1"></i> Fiction
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-bookmark me-1"></i> Mystery
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-bookmark me-1"></i> Romance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-bookmark me-1"></i> Sci-Fi
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-warning mb-3">Newsletter</h5>
            <p className="text-light mb-3">
              Subscribe to get updates on new arrivals, special offers, and literary news.
            </p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email address"
              />
              <button className="btn btn-warning" type="button">
                Subscribe
              </button>
            </div>
            <div className="mt-4">
              <h6 className="text-warning mb-2">Payment Methods</h6>
              <div className="d-flex">
                <i className="bi bi-credit-card fs-4 me-3 text-light"></i>
                <i className="bi bi-paypal fs-4 me-3 text-light"></i>
                <i className="bi bi-currency-dollar fs-4 text-light"></i>
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-warning my-4" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Literary World. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              <a href="#" className="text-light text-decoration-none me-3">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none me-3">Terms of Service</a>
              <a href="#" className="text-light text-decoration-none">Cookie Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;