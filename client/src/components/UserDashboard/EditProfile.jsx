import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../../store/UserContext.jsx";

/* eslint-disable react/prop-types */
export default function EditProfile() {
  const { user, updateUser } = useUser();

  useEffect(() => {
    console.log(user);
  }, []);

  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    addressline1: user.address.addressline1,
    addressline2: user.address.addressline2,
    city: user.address.city,
    pincode: user.address.pincode,
    phoneno: user.profile.phoneno,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/userdashboard`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          formData,
        }),
      });

      if (response.ok) {
        // console.log("Blog updated successfully");
        updateUser({ ...user, ...formData });
        toast.success("Profile updated successfully", { className: "toast" });
      } else {
        // console.error("Failed to update Profile");
        toast.error("Failed to update Profile");
      }
    } catch (error) {
      console.error("Error updating Profile:", error);
    }
    // console.log("Form submitted with data:", formData);
  };

  return (
    <section className="text-udark">
      <hr className="border border-solid border-umedium my-3" />
      <h2 className="text-2xl font-semibold">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 my-5">
          <div className="flex flex-col">
            <label htmlFor="title" className="ulabel">
              First Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="uinput"
              name="firstname"
              id=""
              value={formData.firstname}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="ulabel">
              Last Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="uinput"
              name="lastname"
              id=""
              value={formData.lastname}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="ulabel">
              Email
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="uinput"
              name="email"
              id=""
              disabled
              value={formData.email}
            />
          </div>
          <div className=" flex flex-col col-span-2">
            <label className="ulabel" htmlFor="address1">
              Address Line 1
            </label>
            <input
              onChange={handleChange}
              className="uinput"
              type="text"
              name="addressline1"
              id=""
              value={formData.addressline1}
            />
          </div>
          <div className=" flex flex-col">
            <label className="ulabel" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              onChange={handleChange}
              className="uinput"
              type="text"
              name="phoneno"
              id=""
              value={formData.phoneno}
            />
          </div>
          <div className=" flex flex-col col-span-2">
            <label className="ulabel" htmlFor="address2">
              Address Line 2
            </label>
            <input
              onChange={handleChange}
              className="uinput"
              type="text"
              name="addressline2"
              id=""
              value={formData.addressline2}
            />
          </div>
          <div className=" flex flex-col">
            <label className="ulabel" htmlFor="city">
              City
            </label>
            <input
              onChange={handleChange}
              className="uinput"
              type="text"
              name="city"
              id=""
              value={formData.city}
            />
          </div>
          <div className=" flex flex-col">
            <label className="ulabel" htmlFor="pincode">
              Pincode
            </label>
            <input
              onChange={handleChange}
              className="uinput"
              type="number"
              name="pincode"
              id=""
              value={formData.pincode}
            />
          </div>
        </div>
        <button className="py-2 px-6 w-fit h-12 text-udark border-udark border-2 hover:text-umedium ">
          Update
        </button>
      </form>
    </section>
  );
}
