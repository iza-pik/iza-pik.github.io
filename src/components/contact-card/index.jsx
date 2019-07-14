import React from "react";
import "./contact-card.css";

const ContactCard = props => (
  <div className={props.className}>
    <ul className="contactsList">
      <li>{props.contact.name}</li>
      <li>Email: {props.contact.email}</li>
      <li>Tel: {props.contact.tel}</li>
      <li>LinkedIn: {props.contact.linkedin}</li>
    </ul>
  </div>
);

export default ContactCard;
