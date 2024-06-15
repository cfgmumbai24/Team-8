import React from 'react';
import './SwarojgarForm.css';

const SwarozgarForm = () => {
  return (
    <div className="swarozgar-form">
      <div className="main-block">
        <div className="left-part">
          <i className="fas fa-envelope"></i>
          <i className="fas fa-at"></i>
          <i className="fas fa-mail-bulk"></i>
        </div>
        <form action="/">
          <h1>Enter Details About Your Business</h1>
          <div className="info">
            <input type="text" name="owner-name" placeholder="Business Owner(s) Name" required />
            <input type="text" name="business-name" placeholder="Business Name" required />
            <input type="email" name="business-email" placeholder="Business Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="text" name="address" placeholder="Business Address" required />
            <select name="business-type" required>
              <option value="" disabled selected>Business Type</option>
              <option value="soleProprietorship">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="corporation">Corporation</option>
              <option value="llc">LLC</option>
            </select>
            <select name="industry" required>
              <option value="" disabled selected>Industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail">Retail</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
            <textarea name="description" placeholder="Business Description" required></textarea>
            <input type="number" name="employees" placeholder="Number of Employees" required />
            <select name="revenue" required>
              <option value="" disabled selected>Current Revenue</option>
              <option value="0-5000">$0 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-50000">$10,000 - $50,000</option>
              <option value="50000-100000">$50,000 - $100,000</option>
              <option value="100000+">$100,000+</option>
            </select>
            <textarea name="goals" placeholder="Business Goals" required></textarea>
            <textarea name="challenges" placeholder="Main Challenges Faced" required></textarea>
            <p>Support Needed</p>
            <div className="checkbox-group">
              <label><input type="checkbox" name="support" value="financial" /> Financial</label>
              <label><input type="checkbox" name="support" value="marketing" /> Marketing</label>
              <label><input type="checkbox" name="support" value="operations" /> Operations</label>
              <label><input type="checkbox" name="support" value="mentorship" /> Mentorship</label>
            </div>
            <input type="url" name="website" placeholder="Website Link" />
            <input type="url" name="social-media" placeholder="Social Media Links" />
            <input type="text" name="referral" placeholder="How did you hear about us?" />
            <textarea name="additional-info" placeholder="Any additional comments or information"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SwarozgarForm;
