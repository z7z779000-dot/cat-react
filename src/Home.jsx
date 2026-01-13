import { productsData } from './productsData';
import AuthorSection from './components/AuthorSection';

function Home() {
  return (
    <div className="App">
      {/* قسم المؤلفين */}
      <AuthorSection />
      
      {/* قسم المنتجات */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Products (9 items)</h2>
        <div className="row">
          {productsData.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="card-img-top"
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <p className="h5 text-primary fw-bold">{product.price}</p>
                  <button className="btn btn-success mt-2">
                    <i className="bi bi-cart-plus me-2"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;