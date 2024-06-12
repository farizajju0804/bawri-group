import React, { useState } from 'react';
import './Mail.css';
import mailImage from '../../assets/mail.jpg'
import Completed from './Completed';

const Mail = () => {

  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(prev => !prev);
  }

  return (
    <div className="parent-container">
      <div className='content-container'>
        {isCompleted ? <Completed /> : (<>
          <img src={mailImage} className='mail-image' />
          <div className='mail-input-parent-container'>
            <h3 className='mail-input-title'>Get In Touch</h3>
            <div className='input-container'>

              <div className='top-input-container'>
                <div className="wrapper">
                  <div className="input-data">
                    <input className="text" type="text" required />
                    <div className="underline"></div>
                    <label>Name</label>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="input-data" >
                    <input className='text' type="text" required />
                    <div className="underline"></div>
                    <label>email</label>
                  </div>
                </div>
              </div>

              <div className='wrapper'>
                <div className="input-data">
                  <input className='text-1' type="text" required />
                  <div className="underline"></div>
                  <label>Message</label>
                </div>
              </div>

            </div>

            <div>
            </div>
            <button className='submit-button' onClick={handleClick}>Submit</button>
          </div>
        </>)}
      </div>
    </div>
  );
};

export default Mail;