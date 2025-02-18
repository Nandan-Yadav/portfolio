import React, { useState } from 'react';
import '../style/Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    mobile: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state
  const [submissionError, setSubmissionError] = useState(null); // track submission errors

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile format (10 digits required)';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true); // Disable the button
      setSubmissionError(null);  // Clear any previous submission errors

      try {
        const response = await fetch('https://formsubmit.co/cbd32fcbb545bc74d0813bf9131ec777', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData),
        });

        setIsSubmitting(false); // Re-enable the button (in case of success OR failure)

        if (response.ok) {
          console.log('Form Data:', formData);
          setFormSubmitted(true);
          setFormData({ email: '', mobile: '', message: '' });
          setErrors({ email: '', mobile: '', message: '' });
        } else {
          console.error('Form submission error:', response.status, response.statusText);
          setSubmissionError(`Form submission failed. Please try again later. Status: ${response.status}`); // Set error message
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setIsSubmitting(false); // Ensure button is re-enabled on error
        setSubmissionError('An error occurred while submitting the form. Please try again later.'); // Set a generic error message
      }
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Get In Touch</h1>
      <p>
      Have a question or an exciting opportunity? Fill out the form below, and I'll get back to you as soon as possible. Looking forward to collaborating!      </p>
      {formSubmitted ? (
        <div className="success-message">Thank you for your message! We'll be in touch soon.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Hidden Honeypot Field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Success URL */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html" /> */}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting} // Disable input while submitting
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile"
              value={formData.mobile}
              onChange={handleChange}
              disabled={isSubmitting} // Disable input while submitting
            />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting} // Disable input while submitting
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
          </div>

          <button type="submit" disabled={isSubmitting} className='btn'>
            {isSubmitting ? (
              <span className="spinner"></span> // Replace with your spinner/loader
            ) : (
              'Submit'
            )}
          </button>
            {submissionError && <div className="error">{submissionError}</div>}
        </form>
      )}
    </section>
  );
};

export default Contact;
