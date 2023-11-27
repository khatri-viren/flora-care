import { useState } from "react";
import { Link } from "react-router-dom";
import BorderButton from "../components/shared/Buttons/BorderButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password1: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Basic required field validation
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} field is required`;
        isValid = false;
      }
    });

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+])[A-Za-z\d!@#$%^&*()-=_+]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
      isValid = false;
    }

    // Password match validation
    if (formData.password !== formData.password1) {
      newErrors.password1 = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log(formData);
    try {
      await axios({
        method: "post",
        data: formData,
        withCredentials: true,
        url: "http://localhost:4000/auth/local/register",
      });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password1: "",
      });
      toast.success("Successfully Added Product");
      navigate("/userdashboard");
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error("Error Adding Product");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-fit mx-auto justify-center text-udark py-32 max-w-lg">
        <h1 className="font-bold text-4xl text-center">Signup</h1>
        <label htmlFor="firstname" className="mt-10">
          First Name
        </label>
        <input
          className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="text"
          name="firstname"
          placeholder="First Name"
          id="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <label htmlFor="lastname" className="">
          Last Name
        </label>
        <input
          className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="text"
          name="lastname"
          placeholder="Last Name"
          id="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="email"
          name="email"
          placeholder="Your email"
          id="loginemail"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="password"
          name="password"
          placeholder="Your password"
          id="loginpassword"
          onChange={handleChange}
          value={formData.password}
        />
        <label htmlFor="password1">Confirm Password</label>
        <input
          className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
          type="password"
          name="password1"
          placeholder="Confirm Password"
          id="loginpassword1"
          onChange={handleChange}
          value={formData.password1}
        />
        {Object.keys(errors).map((field) => (
          <p key={field} className="text-red-500 text-sm w-1/2">
            {errors[field]}
          </p>
        ))}
        <div className="mx-auto my-6">
          <BorderButton title="Submit" />
        </div>
        <div className="text-sm font-light my-3">
          Already have an account?{" "}
          <Link className="font-semibold" to={"/login"}>
            Login here
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Signup;
