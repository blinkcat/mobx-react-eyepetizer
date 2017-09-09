import { observable, action, computed } from 'mobx';

class ReplyListStore {
	@observable list = [];
	@observable isFetching = false;
	total = 0;
	@computed
	get remain() {
		return this.total - this.replyList.length;
	}

	constructor(pageNum = 10) {
		this.pageNum = pageNum;
	}

	/**
	 * @param {Boolean} val
	 *
	 * @memberof ReplyListStore
	 */
	@action
	setIsFetching = val => {
		this.isFetching = val;
	};

	/**
	 * @param {Array} newList
	 *
	 * @memberof ReplyListStore
	 */
	@action
	setList = newList => {
		this.list = newList;
	};

	@action
	clear = () => {
		this.list = [];
	};

	setTotal = total => {
		this.total = total;
	};
}

const instance = new ReplyListStore();
export { instance as default, ReplyListStore };
