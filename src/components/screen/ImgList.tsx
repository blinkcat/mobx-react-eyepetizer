import React from 'react';
import styles from './imgList.css';

interface ImageListState {
  curIndex: number;
}

export default class ImageList extends React.Component<{}, ImageListState> {
  private images: string[] = [
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
    'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
  ];

  private len: number = this.images.length;
  private interval: any;

  constructor(props) {
    super(props);
    this.state = {
      curIndex: 0
    };
  }

  private tick = () => {
    this.setState(prevState => {
      return {
        curIndex: (prevState.curIndex + 1) % this.len
      };
    });
  };

  public componentDidMount() {
    this.interval = setInterval(this.tick, 5000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    const { curIndex } = this.state;
    return (
      <div className={styles.root}>
        {this.images.map((v, i) => {
          return <img src={v} className={curIndex === i ? styles.img : styles.hide} key={i} />;
        })}
      </div>
    );
  }
}
