import React from "react";
import styles from "./BookACall.module.css";
import { Book_A_Call } from "../../../utils/constants"; 

const BookACall: React.FC = () => {
  const handleBookCall = () => {
    window.open(Book_A_Call, "_blank");
  };

  const handleFreeConsultation = () => {
    window.open(Book_A_Call, "_blank");
  };

  return (
    <div className={styles.bookACall}>
      <h2 className={styles.heading}>
        Book a free call with us. We will include a free PPC and SEO audit for
        your website.
      </h2>
      <div className={styles.callToAction}>
        <div className={styles.bookButton}>
          <button onClick={handleBookCall}>Book a call</button>
        </div>
        <div className={styles.freeConsultation}>
          <button onClick={handleFreeConsultation}>Free consultation call</button>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
