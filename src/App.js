import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
