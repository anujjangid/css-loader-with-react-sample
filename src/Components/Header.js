import React from 'react';
import styles from '../Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className="Wrapper">
        <div className="Block">
          <div className={styles.firstClass}>Content 1.1</div>
        </div>
        <div className="Block">
          <div className={styles.secondClass}>Content 1.2</div>
        </div>
        <div className="Block">
          <div className={styles.thirdClass}>Content 1.3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
