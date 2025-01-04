import React, { useEffect } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateWishlist } from "../../redux/features/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleDelete = (product) => {
    if (user) {
      dispatch(updateWishlist(product));
    }
  };

  return (
    <div>
      <h1>Your Wishlist</h1>
      <section className="wishlist-container">
        <div className="container">
          <div className="row">
            <div className="wishlist">
              {user && user.wishlist.length > 0 ? (
                user.wishlist.map((wishlistItem) => (
                  <div key={wishlistItem.id} className="wishlist-item">
                    <div className="image">
                      <img src={wishlistItem.image} alt="Product Image" />
                    </div>
                    <h3 className="title">
                      {wishlistItem.title.slice(0, 15) + " ..."}
                    </h3>
                    <p className="category">{wishlistItem.category}</p>
                    <p className="price">${wishlistItem.price}</p>
                    <button
                      className="btn btn-danger removeBtn"
                      onClick={() => {
                        handleDelete(wishlistItem);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty">Your wishlist is empty</p>
              )}
            </div>
            <Link className="link" to="/">
              back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
