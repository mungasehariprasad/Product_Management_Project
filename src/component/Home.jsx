import React, { useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import { Link } from "react-router-dom";

const Home = () => {
  const [msg, setMsg] = useState("");
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    const products = async () => {
      const result = await ProductService.getAllProduct();
      setProductList(result.data);
    };
    products();
  };
  const deleteProductOn = (id) => {
    ProductService.deleteProduct(id)
      .then((res) => {
        setMsg("Delete sucessfully");
        init();
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Product List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S1 No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => {
                      return (
                        <tr>
                          <td>{num + 1}</td>
                          <td>{p.productName} </td>
                          <td>{p.decription}</td>
                          <td>{p.price} </td>
                          <td>{p.status} </td>
                          <td>
                            <Link
                              to={"editProduct/" + p.id}
                              className="btn btn-sm btn-primary"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deleteProductOn(p.id)}
                              className="btn btn-sm btn-danger ms-1"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
