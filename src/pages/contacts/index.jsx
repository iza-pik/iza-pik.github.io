import React, { Component } from "react";
import { contact } from "../../constants";
import ContactCard from "../../components/contact-card";
import "./contacts.css";

class Contacts extends Component {
  render() {
    return (
      <div className="card">
        <ContactCard contact={contact} />
      </div>
    );
  }
}

export default Contacts;
