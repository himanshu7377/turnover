// components/Register.jsx
"use client";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";



const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData); // Example: Output form data to console
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User registered successfully!");
        // Redirect to a success page or perform any other action
      } else {
        console.error("Failed to register user:", await response.text());
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
   
    
    <div className="flex items-center justify-center  ">
      <div className="mt-10 h-[691px] w-[576px]  rounded-lg  border bg-white p-8  shadow-md ">
        <div className="ml-16 h-[39px] w-[316px] justify-center text-end ">
          <h1 className="text-3xl font-bold ">Create your account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-7">
          <div className="mb-4">
            <label className="mb-1 block">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          
          <ButtonComponent buttonText="CREATE ACCOUNT" />
          <div className="flex justify-center ">
            <div className="h-[19px] w-[204px] ">
              <p className="text-center space-x-1 ">
                <span className="inline-block text-end ">Have an Account?{" "}</span>
                <a href="/login" className="text-xl text-black">
                  LOGIN
                </a>
              </p>
            </div>
          </div>

        </form>
      </div>
    </div>
    
  );
};

export default Register;
