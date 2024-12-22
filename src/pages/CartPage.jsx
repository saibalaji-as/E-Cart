import { Link } from 'react-router-dom';

const CartPage = ({ cart, setCart }) => {
  const cartItems = Object.values(cart);

  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[id].quantity = Math.max(updatedCart[id].quantity + delta, 1);
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
      </div>
      <Link to="/" className="back-link">Back to Products</Link>
    </div>
  );
};

export default CartPage;