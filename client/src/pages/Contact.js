import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { useStyles } from "../utils/makeStyles";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [state, setState] = useState(initialState);
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.name, state.email, state.message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.contactPage}>
      <div className={classes.contactContainer}>
        <div className={classes.contactContent}>
          <div className={classes.contactForm}>
            <div className={classes.sectionTitle}>
              <h2 className={classes.contactHeading}>Get In Touch</h2>
              <p className={classes.contactDescription}>
                Please fill out the form below to send us an email 
                and we will get back to you as soon as possible.
              </p>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className={classes.formRow}>
                <div className={classes.formColumn}>
                  <div className={classes.formGroup}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={classes.formControl}
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                    <p className={classes.helpBlock}></p>
                  </div>
                </div>
                <div className={classes.formColumn}>
                  <div className={classes.formGroup}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={classes.formControl}
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                    <p className={classes.helpBlock}></p>
                  </div>
                </div>
              </div>
              <div className={classes.formGroup}>
                <textarea
                  name="message"
                  id="message"
                  className={classes.formControl}
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
                <p className={classes.helpBlock}></p>
              </div>
              <div id="success"></div>
              <button type="submit" className={classes.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};