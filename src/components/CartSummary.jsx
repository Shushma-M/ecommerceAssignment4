import { NavLink } from 'react-router-dom';
import './CartSummary.css';

const CartSummary = ({ products, onCheckout }) => {
    const calculateTotal = () => {
        return products.reduce((acc, product) => acc + product.price * product.qty, 0);
    };

    return (
        <div className="cart-summary">
            <h2>Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.qty}</td>
                            <td>${(product.price * product.qty)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-total">
                <h3>Total Price: ${calculateTotal()}</h3>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>Place Order</button>
        </div>
    );
};

export default CartSummary;