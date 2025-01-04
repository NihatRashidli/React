import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../redux/features/basketSlice";
import styles from "./Card.module.css";

const Card = ({ product, addWishlist }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function notify(text, type) {
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const addToBasket = (e, product) => {
    e.stopPropagation();
    dispatch(addBasket(product));
    notify("Product added to basket", "success");
  };

  return (
    <div className={styles.mycard}>
      <div
        className={styles.card}
        onClick={() => navigate(`/productdetail/${product?.id}`)}
      >
        <i
          className={`fa-regular fa-heart ${styles.cardHeart}`}
          onClick={(e) => addWishlist(e, product)}
        ></i>
        <div className={styles.cardImage}>
          <img src={product?.image} alt="product_image" />
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            {product?.title.slice(0, 20) + " ..."}
          </h2>
          <p className={styles.cardCategory}>{product?.category}</p>
          <div className={styles.cardFooter}>
            <span className={styles.cardPrice}>${product?.price}</span>
            <div className={styles.cardRating}>
              <span>⭐ {product?.rating?.rate}</span>
              <span>({product?.rating?.count} reviews)</span>
            </div>
          </div>
        </div>
        <button
          className={styles.addToCart}
          onClick={(e) => addToBasket(e, product)}
        >
          AddToCard
        </button>
      </div>
    </div>
  );
};

export default Card;
