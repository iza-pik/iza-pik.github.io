import React, { Component } from "react";

const ContactCard = props => (
  <div className={props.className}>
    <ul className="contactsList">
      <li>{props.contact.name}</li>
      <li>Email: {props.contact.email}</li>
      <li>Tel: {props.contact.tel}</li>
    </ul>
  </div>
);

export default ContactCard;
