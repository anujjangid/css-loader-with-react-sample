import React from 'react';
import styles from '../Footer.css';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="Wrapper">
        <div className="Block">
          <div className={styles.firstClass}>Content 3.1</div>
        </div>
        <div className="Block">
          <div className={styles.secondClass}>Content 3.2</div>
        </div>
        <div className="Block">
          <div className={styles.thirdClass}>Content 3.3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
