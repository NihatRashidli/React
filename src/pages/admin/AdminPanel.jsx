import React, { useEffect } from "react";
import "./AdminPanel.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../redux/features/productSlice";
import BasicModal from "../../utils/modal/Modal";
import { useState } from "react";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    handleClose();
    setFormData({
      image: "",
      title: "",
      category: "",
      price: "",
    });
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
    handleClose();
    setFormData({
      image: "",
      title: "",
      category: "",
      description: "",
      price: "",
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="admin-container">
      <main className="content">
        <header>
          <h1>Productlarin Siyahisi</h1>
          <button className="add-btn" onClick={handleOpen}>
            Create
          </button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products && products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="product-id">{product.id}</td>
                    <td>
                      <img
                        className="product-image"
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td className="product-title">
                      {product.title.slice(0, 20)}...
                    </td>
                    <td className="product-category">{product.category}</td>
                    <td className="product-price">{product.price}Azn</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setFormData(product);
                          handleOpen();
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No products</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <BasicModal
          open={open}
          handleClose={handleClose}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={formData.id ? handleUpdateProduct : handleAddProduct}
        />
      </main>
    </div>
  );
};

export default AdminPanel;
