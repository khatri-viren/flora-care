/* eslint-disable react/prop-types */
import { useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import axios from "axios";
import { toast } from "react-toastify";

const Reviews = ({ reviews, id }) => {
  // console.log("Product Reviews Received:", reviews);
  // console.log(reviews.length);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    stars: 0,
    reviewText: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!formData.firstname.trim()) {
      newErrors.firstname = "First Name is required";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.stars < 1 || formData.stars > 5) {
      newErrors.stars = "Rating must be between 1 and 5";
    }
    if (!formData.reviewText.trim()) {
      newErrors.reviewText = "Review cannot be empty";
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    // Add your code to submit the form data to the server or perform any other action
    console.log("Form submitted:", formData);
    try {
      await axios.post(`http://localhost:4000/${id}/addreview`, formData);
      window.location.reload();
      toast.success("Review Successfully Added");
    } catch (error) {
      console.error("Error adding review ", error);
      toast.error("Error Adding Review");
    }

    // Reset form data and errors
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      stars: 0,
      reviewText: "",
    });
    setErrors({});
  };

  return (
    <section className="mx-5 lg:mx-20 my-12 pt-12">
      <h3 className="font-bold text-4xl">Customer Reviews</h3>
      <p className="font-light text-sm mt-4">
        Read what our customers have to say about our IoT-based monitoring
        device.
      </p>
      <div className="cardContainer grid md:grid-cols-2 lg:grid-cols-3 py-10">
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 grid-rows-2">
          {reviews.length === 0 ? (
            <div className="flex justify-center items-center col-span-2">
              {" "}
              No Reviews{" "}
            </div>
          ) : (
            reviews
              .slice(0, 4)
              .map((review, index) => <ReviewCard key={index} {...review} />)
          )}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex-col flex">
              <label htmlFor="firstname" className=" w-fit">
                First Name
              </label>
              <input
                autoComplete="given-name"
                onChange={handleChange}
                className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
                type="text"
                name="firstname"
                placeholder="First Name"
                id="firstname"
              />
            </div>
            <div className="flex-col flex">
              <label htmlFor="lastname" className=" w-fit">
                Last Name
              </label>
              <input
                autoComplete="family-name"
                onChange={handleChange}
                className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
                type="text"
                name="lastname"
                placeholder="Last Name"
                id="lastname"
              />
            </div>
            <div className="flex-col flex">
              <label htmlFor="email" className=" w-fit">
                Email
              </label>
              <input
                autoComplete="email"
                onChange={handleChange}
                className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
                type="text"
                name="email"
                placeholder="Your Email Address"
                id="email"
              />
            </div>
            <div className="flex-col flex">
              <label htmlFor="stars" className=" w-fit">
                Rating Out of 5
              </label>
              <input
                autoComplete=""
                onChange={handleChange}
                className="mb-5 mt-1 bg-ubg border border-solid border-udark px-4 py-2 w-96 focus:outline-none"
                type="number"
                name="stars"
                id="stars"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="reviewText" className="ulabel">
                Review
              </label>
              <textarea
                onChange={handleChange}
                name="reviewText"
                className="uinput w-96"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            {Object.keys(errors).map((key) => (
              <div key={key} className="text-red-500">
                {errors[key]}
              </div>
            ))}
            <button
              type="submit"
              className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
