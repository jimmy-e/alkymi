import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader: React.FC = () => (
  <div className={styles.container}>
    <img
      className={styles.img}
      alt=""
      src="https://assets.website-files.com/5fa94c1e323e52fd0ddf76a5/5faa9685ea516eca567d2de8_Alkymi-footer-logo.svg"
    />
    <h2 data-testid="page-header-title">Data Inbox</h2>
  </div>
);

export default PageHeader;
