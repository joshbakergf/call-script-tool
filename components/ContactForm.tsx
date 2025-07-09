import React from 'react';
import './FormStyles.css';

export default function ContactForm() {
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Contact</label>
          <select id="reason" name="reason">
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required />
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}