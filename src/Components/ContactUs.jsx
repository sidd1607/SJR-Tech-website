import React from "react";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Your name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your Query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
