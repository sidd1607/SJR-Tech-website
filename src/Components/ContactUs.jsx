import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xkndvawz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="ContactUs">
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              id="name"
              name="name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              placeholder="abc@xyz.com"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your Query..."
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
