import { useState } from "react";
import BorderButton from "../components/shared/Buttons/BorderButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        data: loginData,
        withCredentials: true,
        url: "http://localhost:4000/auth/local/login",
      });
      if (response.status === 200) {
        setLoginData({
          email: "",
          password: "",
        });
        const token = response.data.token;
        localStorage.setItem("authToken", token);

        toast.success("Successfully Logged In", { className: "toast" });
        navigate("/");
      }
    } catch (error) {
      console.error("Error Logging In: ", error);
      toast.error("Error Logging In");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-fit mx-auto justify-center text-udark py-32">
        <h1 className="font-bold text-4xl text-center">Login</h1>
        <label htmlFor="email" className="mt-12">
          Email
        </label>
        <input
          className="my-2 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="email"
          name="email"
          placeholder="Your email"
          id="loginemail"
          onChange={handleChange}
          value={loginData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          className="my-2 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="password"
          name="password"
          placeholder="Your password"
          id="loginpassword"
          onChange={handleChange}
          value={loginData.password}
        />
        <div className="mx-auto my-6">
          <BorderButton title="Login" />
        </div>
        <div className="text-sm font-light my-3">
          New here?{" "}
          <Link className="font-semibold" to={"/signup"}>
            create account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
