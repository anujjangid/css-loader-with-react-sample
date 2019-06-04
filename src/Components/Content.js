import React from 'react';
import styles from '../Content.css';

const Content = () => {
  return (
    <React.Fragment>
      <div className="Wrapper">
        <div className="Block">
          <div className={styles.firstClass}>Content 2.1</div>
        </div>
        <div className="Block">
          <div className={styles.secondClass}>Content 2.2</div>
        </div>
        <div className="Block">
          <div className={styles.thirdClass}>Content 2.3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
