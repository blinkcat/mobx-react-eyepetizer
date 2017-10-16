import { observable, action, computed } from 'mobx';
import * as storeTypes from 'Stores/types';

class ReplyListStore {
  @observable public list: storeTypes.ReplyInfo[] = [];
  @observable public isFetching: boolean = false;
  public total: number = 0;
  public pageNum: number = 10;
  @computed
  get remain() {
    return this.total - this.list.length;
  }

  constructor(pageNum = 10) {
    this.pageNum = pageNum;
  }

  @action
  public setIsFetching = (val: boolean) => {
    this.isFetching = val;
  };

  @action
  public setList = (newList: storeTypes.ReplyInfo[]) => {
    this.list = newList;
  };

  @action
  public clear = () => {
    this.list = [];
  };

  public setTotal = (total: number) => {
    this.total = total;
  };
}

const instance = new ReplyListStore();
export { instance as default, ReplyListStore };
