import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../redux/features/productSlice";

const ProductDetail = (product) => {
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem("reviews");
    return storedReviews
      ? JSON.parse(storedReviews)
      : [
          {
            name: "Nihat Rashidli",
            date: "11.09.2001",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ];
  });
  const [newComment, setNewComment] = useState("");
  const {id} = useParams()
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newReview = {
        name: "You",
        date: new Date().toLocaleDateString(),
        comment: newComment.trim(),
      };
      setReviews([...reviews, newReview]);
      setNewComment("");
    }
  };

  const findProduct = products.find((product) => product.id === id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src={findProduct?.image}
            alt="Product"
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </div>
        <div style={{ alignItems: "flex-start", maxWidth:"500px" }}>
          <h1>{findProduct?.title.slice(0, 20) + " ..."}</h1>
          <h3>{findProduct?.category}</h3>
          <p>${findProduct?.price}</p>
          <p>{findProduct?.description}</p>
          <p>
            <strong>5.0</strong> | {reviews.length} reviews
          </p>

          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add to cart
          </button>
          <button
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "#e0e0e0",
              color: "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cash payment
          </button>
        </div>
      </div>

      <div>
        <h2>Reviews</h2>
        <div>
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <p>
                <strong>{review.name}</strong> <span>({review.date})</span>
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <textarea
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
            }}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your review..."
          ></textarea>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleAddComment}
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
