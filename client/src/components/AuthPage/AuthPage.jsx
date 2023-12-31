import React, { useState, useContext } from "react";
import axiosInstance from "../../Utility/helper-component/Axios/RequestHandler";
import "./AuthPage.css";
import { NotifyContext } from "../../context/NotifyContext";
import { UserContext } from "../../context/UserContext";

const AuthPage = ({ closeModel }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    confirmed: null,
  });
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const { setNotify } = useContext(NotifyContext);

  const validator = (data) => {
    if (!data.email || !data.password) {
      setError("Please fill all the fields");
      return false;
    }
    if (!isLogin && data.password !== data.confirmed) {
      setError("Password and confirmed password does not match");
      return false;
    }
    if (!isLogin && data.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    setError(null);
    return true;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (validator(formData) == false) {
      //submit form
      return;
    }
    axiosInstance
      .post(
        `http://localhost:5000/api/auth/${isLogin ? "signin" : "signup"}`,
        formData
      )
      .then((res) => {
        if (res.data._id) {
          setUser(res.data);
          setNotify({
            color: "bg-green-700",
            message: "Logged In successfully",
          });
        }
      })
      .catch((err) => {
        setNotify({
          color: "bg-red-700",
          message: err.response.data.message,
        });
      });
  };

  return (
    <div className="AuthPage z-20 absolute flex justify-center items-center">
      {/* backdrop  */}
      <div
        className="backdrop"
        style={{ zIndex: "-100" }}
        onClick={closeModel}
      ></div>
      <form className="form bg-black p-16 w-96 transition-all duration-2">
        <>
          <div>
            <h3 className="header text-center text-neutral-300 text-2xl uppercase">
              Log In
            </h3>

            <div className="flex flex-col my-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value.length ? e.target.value : null,
                  }))
                }
              />
            </div>

            <div className="flex flex-col my-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value.length ? e.target.value : null,
                  }))
                }
              />
            </div>
            {!isLogin && (
              <div className="flex flex-col my-4">
                <label>Confirmed Password</label>
                <input
                  type="password"
                  name="confirmed"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmed: e.target.value.length ? e.target.value : null,
                    }))
                  }
                />
              </div>
            )}

            <div className="error text-rose-800">{error && <p>{error}</p>}</div>
          </div>

          <button
            onClick={formSubmitHandler}
            className="mt-4 w-full p-2 rounded-sm border-2 text-neutral-400 bg-black transition-all duration-1 hover:bg-white hover:text-neutral-800"
          >
            {isLogin ? "LogIn" : "Signup"}
          </button>
          <div
            onClick={() => {
              setError(null);
              setIsLogin(!isLogin);
            }}
            className="text-center text-slate-400 uppercase mt-2 cursor-pointer hover:underline"
          >
            {isLogin ? "register" : "already have and account?"}
          </div>
        </>
      </form>
    </div>
  );
};

export default AuthPage;
