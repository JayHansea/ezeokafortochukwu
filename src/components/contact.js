import React, { Component } from "react";
import ContactBanner from "./contactBanner";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <ContactBanner />
        <div className="contact-blue">
          <p>
            Want to design a website(coperate, professional, e-commerce)?. Need
            a graphic designer?. Want a tech tutor?. digital marketer?. Well,
            search no more
          </p>
          <p>
            Feel free to reach me through either of the contact medium below
          </p>
          <h4>+2348066926408</h4>
          <h4>ezeokafortochukwu@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default Contact;
