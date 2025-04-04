import "./ContactPage.css";
import { IoLocation } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactIcons from "../../Components/ContanctIcons";

function ContactPage() {
    return (
        <div className="contact-me-container">
            <div className="contact-me-title-container">
                <h1>Contact Me</h1>
            </div>
            <p className="body-text">You can reach me at either my email or phone number!</p>
            <div className="contact-me-body-container">
                <div className="body-left-container">
                    <p className="body-text"><IoLocation className="body-logo" />Location</p>
                    <p className="body-text"><MdEmail className="body-logo" />Email</p>
                    <p className="body-text"><FaSchoolFlag className="body-logo" />Education</p>
                    <p className="body-text"><FaPhoneFlip className="body-logo" />Mobile Number</p>
                    <p className="body-text"><FaGlobeAmericas className="body-logo" />Languages</p>
                </div>
                <div className="body-right-container">
                    <p className="body-text">Albuquerque, New Mexico</p>
                    <p className="body-text">email@email.com</p>
                    <p className="body-text">School Name</p>
                    <p className="body-text">(999)-999-9999</p>
                    <p className="body-text">English</p>
                </div>
            </div>
            <ContactIcons />
        </div>
    );
}

export default ContactPage;
