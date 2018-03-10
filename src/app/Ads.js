import React from 'react';
import {
  map,
  get,
  size,
} from 'lodash';
import { Link } from 'react-router-dom';
import { loadAds } from '../api/ads';
import Pager from './Pager';
import Ad from './Ad';
import styles from './Ads.css';

export default class Ads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    loadAds().then(res => this.setState(() => res));
  }

  render() {
    const index = get(this.props, 'match.params.id', 1) - 1;
    if (this.state.data && size(this.state.data) < index + 1) {
      return <span>Wrong url param</span>;
    }

    const data = get(this.state.data, [index]);

    if (data) {
      const {
        ads,
        page,
        total_pages: totalPage,
      } = data;

      return (
        <section className={styles.ads}>
          <div className={styles.grid}>
            {ads.map(ad => <Ad key={ad.id} {...ad}/>)}
          </div>
          <Pager page={page} total={totalPage} />
        </section>
      );
    }
    return <span>Loading...</span>;
  }
}
