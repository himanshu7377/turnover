// login.tsx
"use client";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false, // Track whether password is visible
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    // Toggle password visibility
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle login submission
    console.log(formData); // Example: Output form data to console
    try {
      // Perform login API call or any other logic
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className=" flex items-center h-screen justify-center">
      {/* main div */}
      <div className="h-[614px] w-[576px] rounded-md border p-14">
        {/* border div  */}
        <div className="mb-8  flex justify-center items-center">
          {/* heading login */}
          <h2 className="text-3xl font-bold">Login</h2>
        </div>

        <div className="mb-6">
          {/* Welcome back to ECOMMERCE */}
          <h1 className="mb-2 text-center text-xl font-bold">
            Welcome back to ECOMMERCE
          </h1>
          {/* The next gen business marketplace */}
          <p className="text-center">The next gen business marketplace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative mb-4">
            <label className="mb-1 block">Password</label>
            <input
              type={formData.showPassword ? "text" : "password"} // Show password if toggled
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-3 pr-10 focus:border-blue-500 focus:outline-none"
            />
            {/* Show option for password */}
            <button
              type="button"
              className="absolute right-3 top-3/4 -translate-y-3/4  text-sm"
              onClick={handleShowPassword}
            >
              Show
            <div className="border border-black"/>
            </button>
          </div>
          <ButtonComponent buttonText="Login" />


          <div className="border border-grey-400"/>

          <div className="flex justify-center">
            <div className="h-[19px] w-[264px]">
              <p className="text-center">
                Don't have an account?{" "}
                <a href="/signup" className="text-xl font-medium text-black">
                  SIGN UP
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
