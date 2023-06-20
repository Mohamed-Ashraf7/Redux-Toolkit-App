import React, { useCallback, useState, useRef } from "react";
import { MdOutlineSubtitles } from "react-icons/md";
import { BsCurrencyDollar, BsFillPersonCheckFill } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";
import style from "./modules/form.module.css";
import { insertBook } from "../store/bookSlice";
import { useDispatch, useSelector } from "react-redux";

const Addform = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.Login);
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    price: "",
    Description: "",
  });
  const formRef = useRef(null);
  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(insertBook(formData));
    formRef.current.reset();
    setFormData({
      author: "",
      title: "",
      price: "",
      Description: "",
    });
  };

  return (
    <div className="row pt-3">
      <div
        className="col-9 mx-auto p-5 offset-3 bg-white position-relative;"
        style={{
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
          borderRadius: "2px",
        }}
      >
        <div className={style.after}></div>
        <h3 className="text-center text-uppercase">Insert your Book data</h3>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group ">
            <div className="d-flex my-1 align-items-center justify-content-between">
              <label htmlFor="author" className="h6 px-1">
                Author
              </label>
              <BsFillPersonCheckFill color="#4F709C" fontSize={"30px"} />
            </div>
            <input
              type="text"
              className={`form-control ${style.shadow} text-capitalize`}
              name="author"
              onChange={handleInputChange}
              placeholder="Book Author"
              required
            />
          </div>
          <div className="form-group ">
            <div className="d-flex my-1 align-items-center justify-content-between">
              <label htmlFor="title" className="h6 px-1">
                Title
              </label>
              <MdOutlineSubtitles color="#4F709C" fontSize={"28px"} />
            </div>
            <input
              type="text"
              className={`form-control ${style.shadow} text-capitalize`}
              name="title"
              onChange={handleInputChange}
              placeholder="Book Title"
              required
            />
          </div>
          <div className="form-group ">
            <div className="d-flex my-1 align-items-center justify-content-between">
              <label htmlFor="price" className="h6 px-1">
                Price
              </label>
              <BsCurrencyDollar color="#4F709C" fontSize={"28px"} />
            </div>
            <input
              type="number"
              placeholder="Book Price"
              name="price"
              onChange={handleInputChange}
              className={`form-control ${style.shadow} text-capitalize`}
              required
            />
          </div>
          <div className="form-group my-2">
            <div className="d-flex my-0 align-items-center justify-content-between">
              <label htmlFor="Description" className="h6 px-1">
                Description
              </label>
              <TbFileDescription color="#4F709C" fontSize={"28px"} />
            </div>
            <textarea
              className={`form-control ${style.shadow} text-capitalize`}
              rows="2"
              onChange={handleInputChange}
              name="Description"
              placeholder="Write Your Description Here"
              required
            ></textarea>
          </div>
          <div className="col-11 mx-auto">
            <button
              type="submit"
              disabled={!login}
              className={`col-12 text-center ${style.button}`}
            >
              {login ? "Save" : "Please Login First To Use It"}
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addform;
