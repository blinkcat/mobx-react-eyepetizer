import { observable, action } from 'mobx';
import { merge } from 'lodash';

class VideoStore {
	@observable
	videoInfo = {
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
	@observable isFetching = false;

	/**
	 * @param {Boolean} val
	 *
	 * @memberof VideoStore
	 */
	@action
	setIsFetching = val => {
		this.isFetching = val;
	};

	/**
	 * @param {Object} data
	 * 
	 * @memberof VideoStore
	 */
	@action
	setVideoInfo = data => {
		merge(this.videoInfo, data);
	};

	@action
	clear = () => {
		this.videoInfo = {};
	};
}

const instance = new VideoStore();

export { instance as default, VideoStore };
