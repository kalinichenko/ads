import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

import styles from './Pager.css';

export default ({ page, total }) => (
  <section className={styles.pager}>
    {
      map(Array(total), (_, index) => (
        <Link to={`${index + 1}`} key={index} className={page === index + 1 ? styles.disabledPage : styles.page}>
          {index + 1}
        </Link>
      ))
    }
    <Link to={`${page + 1}`} className={total === page ? styles.disabledPage : styles.page}>
      next
    </Link>
  </section>
);

