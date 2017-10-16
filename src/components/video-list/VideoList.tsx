import React from 'react';
import { observer, inject } from 'mobx-react';
import second2minute from 'Utils/second2minute';
import styles from './videoList.css';
import { Link } from 'react-router-dom';
import storeTypes from 'Stores/types';

interface VideoListProp {
  videoListStore?: storeTypes.VideoListStore;
}

@inject('videoListStore')
@observer
class VideoList extends React.Component<VideoListProp, any> {
  constructor(props) {
    super(props);
  }

  private videoListStore = this.props.videoListStore as storeTypes.VideoListStore;

  public componentDidMount() {
    const { videoListStore } = this;
    if (videoListStore.videoList.length === 0 && videoListStore.fetchingStatus !== 'pending') {
      videoListStore.getData();
    }
  }

  public render() {
    const { videoListStore } = this;
    return (
      <div className={styles.video_list}>
        <VideoDate timeStamp={videoListStore.date} />
        <VideoItems list={videoListStore.videoList} />
      </div>
    );
  }
}

interface VideoDateProp {
  timeStamp: number;
}

function VideoDate({ timeStamp }: VideoDateProp) {
  const arr = new Date(timeStamp).toString().split(' ');
  return <div className={styles.date}>{`- ${arr[1]}. ${arr[2]} -`}</div>;
}

function VideoItems({ list }: storeTypes.VideoItemsProp): JSX.Element {
  return <div>{list.map(v => <VideoItem {...v} key={v.id} />)}</div>;
}

function VideoItem(props: storeTypes.VideoItemProp): JSX.Element {
  const { id, bg, title, meta } = convert(props);
  return (
    <Link to={`/detail/${id}`} className={styles.video} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.cover} />
      <div className={styles.title}>{title}</div>
      <div className={styles.meta}>{meta}</div>
    </Link>
  );
}

interface ConvertResult {
  id: string | number;
  title: string;
  meta: string;
  bg: string;
}

function convert(data: storeTypes.VideoItemProp): ConvertResult {
  return {
    id: data.id,
    title: data.title,
    meta: `#${data.category} / ${second2minute(data.duration)}`,
    bg: data.coverForFeed
  };
}

export { VideoList as default, VideoDate, convert };
