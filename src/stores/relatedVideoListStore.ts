import { observable, action } from 'mobx';
import * as storeTypes from 'Stores/types';

// 相关视频
class RelatedVideoListStore {
  @observable public list: storeTypes.VideoItemProp[] = [];
  @observable public isFetching: boolean = false;
  public pageNum: number;
  // @observable fetching_status = ''; // "pending" / "done" / "error"

  constructor(pageNum = 10) {
    this.pageNum = pageNum;
  }

  @action
  public setIsFetching = (val: boolean) => {
    this.isFetching = val;
  };

  @action
  public setList = (newList: storeTypes.VideoItemProp[]) => {
    this.list = newList;
  };
}

const instance = new RelatedVideoListStore();
export { instance as default, RelatedVideoListStore };
