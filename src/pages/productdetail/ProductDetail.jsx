import React, { useState } from "react";

const ProductDetail = () => {
  const [reviews, setReviews] = useState([
    { name: "John Smith", date: "09 July, 2021", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]);
  const [newComment, setNewComment] = useState("");

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

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ flex: 1 }}>
          <img
            src=""
            alt="Product"
            style={{ width: "100%", maxWidth: "300px" }}
          />
        </div>
        <div style={{ flex: 2, marginLeft: "20px" }}>
          <h1>Hotel Magique Love and Magique Tote Bag</h1>
          <p>
            <strong>5.0</strong> | 2 reviews
          </p>
          
          
          
          <button style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#dc3545", color: "#fff", border: "none", cursor: "pointer" }}>
            Add to card
          </button>
          <button style={{ marginLeft: "10px", padding: "10px 20px", backgroundColor: "#e0e0e0", color: "#000", border: "none", cursor: "pointer" }}>
            Cash payment
          </button>
        </div>
      </div>

      {/* Reviews hissəsi */}
      <div>
        <h2>Reviews</h2>
        <div>
          {reviews.map((review, index) => (
            <div key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
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
            style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc" }}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your review..."
          ></textarea>
          <button
            style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}
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
