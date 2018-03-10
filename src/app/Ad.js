
import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

import styles from './Ad.css';

export default ({ title, created, params, description }) => {
  return (
    <div className={styles.ad}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link className={styles.titleLink} to="#">{title}</Link>
        </h3>
        <small className={styles.created}>Created:&nbsp;{created}</small>
        <ul className={styles.params}>
          {map(params, (value, key) => <li key={key} className={styles.param}><small>{`${value[0]}: ${value[1]}`}</small></li>)}
        </ul>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
};
