import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/v4hypelogo.png"; // Replace with the correct logo path
import facebookIcon from "../../assets/images/ri_facebook-fill.png";
import instagramIcon from "../../assets/images/ri_linkedin-fill.png";
import linkedinIcon from "../../assets/images/ri_whatsapp-fill.png";
import Copyright from "../Copyright/Copyright";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.contactContainer}>
          <h3 className={styles.contactHeading}>Let’s do it together!</h3>
          <p className={styles.contactSubheading}>
            Tell us a few words about your project
          </p>
          <button className={styles.getInTouchButton}>Get in touch</button>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
              <a href="mailto:contact@viral4hype" className={styles.link}>
                contact@viral4hype
              </a>
            </li>
            <li>
              <a href="tel:+40753754321" className={styles.link}>
                +40 753 754 321
              </a>
            </li>
            <li>
              <span className={styles.address}>
                Bucharest<br />
                Baba Novac 12, Romania, 400124
              </span>
            </li>
          </ul>
        </div>
      </div>
     
    </footer>
    
  );
};

export default Footer;
