import React, { useState } from "react";
import ProductService from "../service/ProductService";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    decription: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();
    ProductService.saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
          productName: "",
          decription: "",
          price: "",
          status: "",
        });
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="decription"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.decription}
                    />
                  </div>
                  <div className="mb-3">
                    <label> Enter price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label> Enter status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
