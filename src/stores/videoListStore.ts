import { observable, action, runInAction } from 'mobx';
import http from 'Utils/http';
import { pick } from 'lodash';

class VideoListStore {
  @observable public videoList = [];
  @observable public date = 0;
  @observable public fetchingStatus = 'done'; // "pending" / "done" / "error"

  private pickNeededData = list => {
    return list.map(v => {
      return pick(v, ['id', 'title', 'category', 'duration', 'coverForFeed']);
    });
  };

  @action
  public getData = () => {
    this.fetchingStatus = 'pending';
    return http
      .get('/feed')
      .then(res => {
        let rawData;
        if (res.status === 200) {
          rawData = res.data.dailyList[0];
          runInAction(() => {
            this.date = rawData.date;
            Array.prototype.push.apply(this.videoList, this.pickNeededData(rawData.videoList));
            this.fetchingStatus = 'done';
          });
        }
      })
      .catch(e => {
        console.log(e);
        runInAction(() => {
          this.fetchingStatus = 'error';
        });
      });
  };
}

const instance = new VideoListStore();
export { instance as default, VideoListStore };
