import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/v4hypelogo.png"; // Replace with the correct logo path
import facebookIcon from "../../assets/images/ri_facebook-fill.png";
import instagramIcon from "../../assets/images/ri_linkedin-fill.png";
import linkedinIcon from "../../assets/images/ri_linkedin-fill.png";
import { Book_A_Call } from "../../utils/constants"; // Centralized link

const Footer: React.FC = () => {
  const handleBookACall = () => {
    window.open(Book_A_Call, "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.contactContainer}>
          <h3 className={styles.contactHeading}>Let’s do it together!</h3>
          <p className={styles.contactSubheading}>
            Tell us a few words about your project
          </p>
          <button className={styles.getInTouchButton} onClick={handleBookACall}>
            Get in touch
          </button>
        </div>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/viral4hype"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/company/viral4hype/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.rightSection}>
        <div className={styles.column}>
          <h4 className={styles.columnHeading}>LEGACY</h4>
          <ul className={styles.columnList}>
            <li>
              <a href="/cookie-policy" className={styles.link}>
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className={styles.link}>
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnHeading}>MENU</h4>
          <ul className={styles.columnList}>
            <li>
              <a href="/" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="/google-ads" className={styles.link}>
                Google Ads
              </a>
            </li>
            <li>
              <a href="/react-web-development" className={styles.link}>
                React Web Development
              </a>
            </li>
            <li>
              <a href="/blog" className={styles.link}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnHeading}>CONTACT</h4>
          <ul className={styles.columnList}>
            <li>
              <a href="mailto:contact@viral4hype.com" className={styles.link}>
                contact@viral4hype.com
              </a>
            </li>
           
            <li>
              <span className={styles.address}>
              Bucharest, Romania<br />
                Constanta, Romania
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
