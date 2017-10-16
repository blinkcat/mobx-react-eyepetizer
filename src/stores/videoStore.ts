import { observable, action } from 'mobx';
import { merge } from 'lodash';
import { VideoInfo as IVideoInfo } from './types';

class VideoStore {
  @observable
  public videoInfo: IVideoInfo = {
    id: '',
    title: '',
    category: '',
    duration: 0,
    coverForFeed: '',
    coverBlurred: '',
    description: '',
    tags: [],
    playUrl: ''
  };

  @observable public isFetching: boolean = false;

  @action
  public setIsFetching = (val: boolean) => {
    this.isFetching = val;
  };

  @action
  public setVideoInfo = data => {
    merge(this.videoInfo, data);
  };

  @action
  public clear = () => {
    this.videoInfo = {} as IVideoInfo;
  };
}

const instance = new VideoStore();

export { instance as default, VideoStore };
