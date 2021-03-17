import React from "react";
import "./contact-card.css";
import LinkedInLogo from "../../assets/images/LinkedIn_logo.svg";
import GitHubLogo from "../../assets/images/GitHub_logo.svg";
import InstagramLogo from "../../assets/images/Instagram_logo.svg";
import GmailIcon from "../../assets/images/Gmail_icon.svg";
import PhoneIcon from "../../assets/images/Phone_icon.svg";

const ContactCard = props => (
  <div className={props.className}>
    <ul className="contactsList">
      <li>
        <h4>{props.contact.name}</h4>
      </li>
      <li>
        <a href="mailto:i.j.pikula@gmail.com?subject=Job Enquiry">
          <img src={GmailIcon} className="contact-icon" alt="Gmail icon" />
        </a>
        {props.contact.email}
      </li>
      <li>
        <img src={PhoneIcon} className="contact-icon" alt="Phone icon" />
        {props.contact.tel}
      </li>
      <li>
        <div className="social-media">
          <a href={props.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <img
              src={LinkedInLogo}
              className="social-media-logo"
              alt="LinkedIn logo"
            />
          </a>
          <a href={props.contact.github} target="_blank" rel="noopener noreferrer">
            <img
              src={GitHubLogo}
              className="social-media-logo"
              alt="GitHub logo"
            />
          </a>
          <a href={props.contact.instagram} target="_blank" rel="noopener noreferrer">
            <img
              src={InstagramLogo}
              className="social-media-logo"
              alt="Instagram logo"
            />
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default ContactCard;
