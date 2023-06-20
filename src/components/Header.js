import React from "react";
import imag4 from "../images/pexels4.jpg";
import { isLogged } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.Login);
  return (
    <nav
      className="navbar navbar-dark bg-dark sticky-top p-2"
      style={{
        backgroundImage: `url(${imag4})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "0px 10px 70px #000",
      }}
    >
      <span className="fs-1 text-white mb-0">My Books</span>

      <button
        className=" fs-5  btn btn-danger px-5 py-3"
        type="submit"
        onClick={() => dispatch(isLogged())}
      >
        {login ? "LogOut" : "Login"}
      </button>
    </nav>
  );
};

export default Header;
