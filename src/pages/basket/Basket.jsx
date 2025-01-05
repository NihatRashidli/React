import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteBasket, minusBtn, plusBtn } from "../../redux/features/basketSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);
  const navigate = useNavigate();

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const notify = (text, type) =>
    toast(text, {
      type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  const handleDeleteBasket = (product) => {
    dispatch(deleteBasket(product));
    notify("Product deleted from basket", "error");
  };

  const handlePlus = (product) => {
    dispatch(plusBtn(product));
  };

  const handleMinus = (product) => {
    if (product.quantity > 1) {
      dispatch(minusBtn(product));
    }
  };

  return (
    <section className="shopping-basket">
      <h1 className="page-title">Shopping Bag</h1>
      <div className="basket-content">
        <div className="products-list">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="product-item" key={product.id}>
                <div
                  className="product-image"
                  onClick={() => navigate(`/productdetail/${product.id}`)}
                >
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <h6 className="product-title">
                    {product.title.length > 20
                      ? product.title.slice(0, 20) + "..."
                      : product.title}
                  </h6>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="count-area">
                    <button
                      className="minus-btn"
                      onClick={() => handleMinus(product)}
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                    <span className="count">{product.quantity}</span>
                    <button
                      className="plus-btn"
                      onClick={() => handlePlus(product)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleDeleteBasket(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-basket">Your Basket is Empty</p>
          )}
        </div>

        <div className="basket-summary">
          <h4>Subtotal:</h4>
          <p>${totalAmount.toFixed(2)}</p>
          <p>Shipping: Free</p>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <div className="promo-code">
            <input type="text" placeholder="Promo Code" />
            <button className="apply-btn">Apply</button>
          </div>
          <button className="confirm-cart-btn">Confirm Cart</button>
          <button className="cash-payment-btn">Cash Payment</button>
          <Link to="/" className="back-btn">
            Back to Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Basket;
