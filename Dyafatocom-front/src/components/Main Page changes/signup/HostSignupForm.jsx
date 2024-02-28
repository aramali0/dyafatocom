import React, { useState } from "react";
import axios from "axios";
import "./HostSignupForm.css";

function HostSignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    lastName: "",
    email: "",
    tel: "",
    sexe: "",
    age: "",
    cin: "",
    description: "",
  });

  const languages = [
    "English",
    "French",
    "Spanish",
    "German",
    "Italian",
    "Chinese",
    "Japanese",
  ]; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    
    axios
      .post("http://localhost:8080/api/host/signup", formDataToSend)
      .then((response) => {
        console.log("Response from server:", response.data);
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="host-signup-form-container">
      <h2>Host Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="tel"
            placeholder="Telephone"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <select name="sexe" value={formData.sexe} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="cin"
            placeholder="CIN"
            value={formData.cin}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Profile Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>Language:</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="">Select Language</option>
            {languages.map((lang, index) => (
              <option key={index} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default HostSignupForm;
