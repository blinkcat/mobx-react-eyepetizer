import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { loadVideoData } from 'Services/video';
import { loadRelatedVideoData } from 'Services/relatedVideo';
import { loadReplyData } from 'Services/reply';
import second2minute from 'Utils/second2minute';
import dateFormat from 'Utils/dateFormat';
import { pick, omit } from 'lodash';
import Loading from 'Components/loading';
import Video from 'Components/video';
import VideoInfo from 'Components/video-info';
import styles from './detail.css';
import * as storeTypes from 'Stores/types';
import uiStore from 'Stores/uiStore';

interface Match {
  params: {
    id: string | number;
  };
}

interface DetailProp {
  videoStore?: storeTypes.VideoStore;
  relatedVideoListStore?: storeTypes.RelatedVideoListStore;
  replyListStore?: storeTypes.ReplyListStore;
  match?: Match;
}

@inject('videoStore', 'relatedVideoListStore', 'replyListStore')
@observer
export default class Detail extends React.Component<DetailProp, any> {
  constructor(props) {
    super(props);
  }
  private id: string | number = (this.props.match as Match).params.id;

  public componentWillReceiveProps(nextProps) {
    const { match: { params: { id } } } = nextProps;
    if (id !== this.id) {
      this.id = id;
      this.loadData();
    }
  }

  public componentDidMount() {
    this.loadData();
  }

  private loadData = () => {
    loadVideoData(this.id);
    loadRelatedVideoData(this.id);
    loadReplyData(this.id);
  };

  public render() {
    const { videoInfo, isFetching } = this.props.videoStore as storeTypes.VideoStore;
    const { list } = this.props.relatedVideoListStore as storeTypes.RelatedVideoListStore;
    const { list: replyList } = this.props.replyListStore as storeTypes.ReplyListStore;

    uiStore.setTitle(videoInfo.title);
    uiStore.setDescription(videoInfo.description);

    if (isFetching) {
      return <Loading />;
    } else {
      return (
        <div className={styles.root}>
          <div className={styles.inner}>
            <Video {...pick(videoInfo, ['playUrl', 'coverForFeed'])} />
            <div className={styles.relative}>
              <div className={styles.relative_inner}>
                <VideoInfo {...omit(videoInfo, ['playUrl', 'coverForFeed', 'coverBlurred'])} />
                <RelatedVideoList list={list} />
                <div className={styles.long_divide} />
                <ReplyList list={replyList} />
                <div className={styles.long_divide} />
                <Tag list={videoInfo.tags} />
                <div className={styles.long_divide} />
                <Footer />
              </div>
              <div
                className={styles.video_cover_blurred}
                style={{ backgroundImage: `url(${videoInfo.coverBlurred})` }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

function RelatedVideoList({ list }) {
  return (
    <div className={styles.related}>
      {list.map(v => (
        <Link key={v.id} to={`/detail/${v.id}`}>
          <div className={styles.related_item}>
            <div className={styles.cover} style={{ backgroundImage: `url(${v.coverForFeed})` }} />
            <div className={styles.meta}>
              <div className={styles.title}>{v.title}</div>
              <div className={styles.category}>{`#${v.category} / ${second2minute(v.duration)}`}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ReplyList({ list }) {
  return (
    <div className={styles.reply}>
      <div className={styles.header}>热门评论</div>
      <div>
        {list.map(v => (
          <div className={styles.replyb} key={v.id}>
            <div className={styles.like}>
              <div>
                <div className={styles.like_num}>{v.likeCount}</div>
                <div className={styles.like_icon} />
              </div>
              {v.hot === true && <div className={styles.like_hot} />}
            </div>
            <div className={styles.avatar} style={{ backgroundImage: `url(${v.user.avatar})` }} />
            <div className={styles.entity}>
              <p className={styles.username}>{v.user.nickname}</p>
              <p className={styles.time}>{dateFormat(v.createTime)}</p>
              <p className={styles.text}>{v.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dbutton_outer}>
        <button className={styles.dbutton}>下载开眼客户端，查看更多精彩评论！</button>
      </div>
    </div>
  );
}

function Tag({ list }) {
  return (
    <div className={styles.tag}>
      <div className={styles.header}>热门标签</div>
      <div className={styles.tag_list}>
        {list.map((v, i) => (
          <span key={i} className={styles.tag_item}>
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="/">
        <div className={styles.bottom_logo} />
      </a>
      <img
        className={styles.footer_img}
        src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.243f15a2.png"
        alt="eyepetizer wechat qrcode"
      />
      <div className={styles.qr_tips}>长按二维码关注「开眼 Eyepetizer」微信公众号</div>
    </div>
  );
}
