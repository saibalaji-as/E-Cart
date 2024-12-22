import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart[product.id]) {
        const updatedCart = { ...prevCart };
        delete updatedCart[product.id];
        return updatedCart;
      }
      return { ...prevCart, [product.id]: { ...product, quantity: 1 } };
    });
  };

  return (
    <div className="product-page">
      <div className='header'>
        <div className='app-name'>E-Cart</div>
        <Link to="/cart" className="cart-link">Go to Cart</Link>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} height="100px" className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              {cart[product.id] ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;