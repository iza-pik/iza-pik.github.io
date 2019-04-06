import React, { Component } from "react";
import { contact } from "../../constants";
import ContactCard from "../../components/ContactCard";
import "./contacts.css";

class Contacts extends Component {
  render() {
    return (
      <div className="card">
        {/* {contacts.map(contact => ( */}
        <ContactCard contact={contact} />
        {/* ))} */}
        {/* <ul>
          <li>Name: {contact.name}</li>
          <li>Email: {contact.email}</li>
          <li>Tel: {contact.tel}</li>
        </ul> */}
      </div>
    );
  }
}

export default Contacts;
