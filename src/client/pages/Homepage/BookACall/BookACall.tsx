import React from "react";
import styles from "./BookACall.module.css";
import bookAcall from '../../../assets/images/bookAcall.jpg'

const BookACall: React.FC = () => {
  return (
    <div className={styles.bookACall}>
      <h2 className={styles.heading}>
        Book a free call with us. We will include a free PPC and SEO audit for
        your website.
      </h2>
      <div className={styles.callToAction}>
        <div className={styles.bookButton}>
          <button>Book a call</button>
        </div>
        <div className={styles.freeConsultation}>
          <button>Free consultation call</button>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
