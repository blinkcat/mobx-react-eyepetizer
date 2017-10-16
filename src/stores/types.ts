export interface VideoListStore {
  videoList: VideoItemProp[];
  date: number;
  fetchingStatus: 'pending' | 'done' | 'error';
  getData(): Promise<any>;
}

export interface VideoItemsProp {
  list: VideoItemProp[];
}

export interface VideoItemProp {
  id: string | number;
  title: string;
  category: string;
  duration: number;
  coverForFeed: string;
}

export interface VideoStore {
  videoInfo: VideoInfo;
  isFetching: boolean;
}

export interface VideoInfo {
  id: string | number;
  title: string;
  category: string;
  duration: number;
  coverForFeed: string;
  coverBlurred: string;
  description: string;
  tags: string[];
  playUrl: string;
}

export interface RelatedVideoListStore {
  list: VideoItemProp[];
  isFetching: boolean;
}

export interface ReplyListStore {
  list: ReplyInfo[];
  isFetching: boolean;
}

export interface ReplyInfo {
  id: string | number;
  hot: boolean;
  likeCount: number;
  message: string;
  createTime: string | number;
  user: {
    nickname: string;
    avatar: string;
  };
}

export interface VideoMeta {
  title: string;
  category: string;
  duration: number;
  description: string;
}
