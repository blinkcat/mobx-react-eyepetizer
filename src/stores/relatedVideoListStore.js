import { observable, action } from 'mobx';

//相关视频
class RelatedVideoListStore {
	@observable list = [];
	@observable isFetching = false;
	// @observable fetching_status = ''; // "pending" / "done" / "error"

	constructor(pageNum = 10) {
		this.pageNum = pageNum;
	}

	/**
	 * @param {Boolean} val
	 *
	 * @memberof RelatedVideoListStore
	 */
	@action
	setIsFetching = val => {
		this.isFetching = val;
	};

	/**
	 * @param {Array} newList
	 *
	 * @memberof RelatedVideoListStore
	 */
	@action
	setList = newList => {
		this.list = newList;
	};
}

const instance = new RelatedVideoListStore();
export { instance as default, RelatedVideoListStore };
