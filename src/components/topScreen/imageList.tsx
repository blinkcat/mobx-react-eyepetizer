import * as React from 'react';

export interface ImageListState {
  curImgIndex: number;
}

export default class ImageList extends React.Component<any, ImageListState> {
  public imgList: string[] = [
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
    '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
  ];

  private interval: any;
  private imgCount = this.imgList.length;

  constructor(props) {
    super(props);
    this.state = {
      curImgIndex: 0
    };
  }

  public componentDidMount() {
    this.interval = setInterval(this.tick, 5000);
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <div className="image-list">
        {this.imgList.map((image, i) => (
          <img key={i} src={image} className={i === this.state.curImgIndex ? '' : 'hide'} />
        ))}
        <style jsx>
          {`
            .image-list {
              display: none;
              height: 100%;
              position: absolute;
              width: 100%;
              z-index: -200;
              @media screen and (max-width: 1024px) {
                display: block;
              }
              img {
                animation: f 20s linear infinite alternate;
                opacity: 1;
                position: absolute;
                transition: opacity 1.25s;
                width: 120%;
                &.hide {
                  opacity: 0;
                }
              }
            }
            @keyframes f {
              0% {
                transform: scaleX(1);
              }

              to {
                transform: scale3d(1.3, 1.3, 1.3);
              }
            }
          `}
        </style>
      </div>
    );
  }

  private tick = () => {
    this.setState(prevState => {
      return {
        curImgIndex: (prevState.curImgIndex + 1) % this.imgCount
      };
    });
  };
}
