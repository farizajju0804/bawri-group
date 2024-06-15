import React, { useState } from 'react';
import './Mail.css';
import mailImage from '../../assets/mail.jpg';
import Completed from './Completed';

const Mail = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsCompleted(true);
    }
  };

  return (
    <div className="parent-container">
      <div className="content-container">
        {isCompleted ? <Completed /> : (
          <>
            <img src={mailImage} className='mail-image' alt="Mail" />
            <form className='mail-input-parent-container' onSubmit={handleSubmit}>
              <h3 className='mail-input-title'>Get In Touch</h3>
              <div className='input-container'>
                <div className='top-input-container'>
                  <div className="wrapper">
                    <div className={`input-data ${errors.name && 'error'}`}>
                      <input 
                        className="text" 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                      <div className="underline"></div>
                      <label>Name</label>
                      {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                  </div>

                  <div className="wrapper">
                    <div className={`input-data ${errors.email && 'error'}`}>
                      <input 
                        className='text' 
                        type="text" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                      <div className="underline"></div>
                      <label>Email</label>
                      {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                  </div>
                </div>

                <div className='wrapper'>
                  <div className={`input-data ${errors.message && 'error'}`}>
                    <input 
                      className='text-1' 
                      type="text" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                    <div className="underline"></div>
                    <label>Message</label>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                  </div>
                </div>
              </div>

              <button className='submit-button' type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Mail;
