import React from 'react';
import styles from './videoInfo.css';
import { pick } from 'lodash';
import second2minute from 'Utils/second2minute';
import * as storeTypes from 'Stores/types';

export default function VideoInfo(props) {
  const metaInfo: storeTypes.VideoMeta = pick(props, ['title', 'category', 'duration', 'description']);
  return (
    <div>
      <VideoMeta {...metaInfo} />
      <div className={styles.long_divide} />
      <div className={styles.launch}>
        <div className={styles.logo} />
        <a href="https://lkme.cc/3rC/Umc43xdcI">
          <button className={styles.button} />
        </a>
      </div>
      <div className={styles.long_divide} />
    </div>
  );
}

function VideoMeta(props: storeTypes.VideoMeta) {
  return (
    <div className={styles.meta}>
      <h1 className={styles.h1}>{props.title}</h1>
      <div className={styles.divide} />
      <p className={styles.p}>{`${props.category} / ${second2minute(props.duration)}`}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
