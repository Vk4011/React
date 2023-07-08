import React from "react";
import "../Styles/DashBoard.css"
import { useState } from "react";

const Dash = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
        gender: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission or further processing with formData
        console.log(formData);
      };
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Doctor</h1>
        </header>

        <div className="content">
          <div className="dashboards">
            <h2>Dashboards</h2>
            {/* Dashboard content goes here */}
          </div>

          <div className="bio-form">
            <h2>Bio Data Form</h2>
            <div className="container-Bio">
      <form className="bio-form" onSubmit={handleSubmit}>
        <h2>Bio Data Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
              />
              Male
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
              />
              Female
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
