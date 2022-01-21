import React from 'react';
import PropTypes from 'prop-types';
import styles from './Start.module.scss';

import Button from '../../common/Button/Button';

function Start({ title, description, img = '', onClickStart }) {
  return (
    <div className={styles.start}>
      {img && (
        <img
          alt="Quiz start"
          src={require(`../../assets/images/start/Landing.png`).default }//|| {img}.default}
          // src = {img}
          className={styles['header-img']}
        />
      )}
      <h3 className={styles.title}>
        <strong>{title}</strong>
      </h3>

      <p className={styles.description}>{description}</p>

      <div className={styles['start-button-container']}>
        <Button
          text="Start"
          onButtonClick={onClickStart}
        />
      </div>
    </div>
  );
}

export default Start;
