import { observable, action, runInAction } from 'mobx';
import http from 'Utils/http';
import _ from 'lodash';

class VideoListStore {
	@observable videoList = [];
	@observable date = 0;
	@observable fetching_status = 'done'; // "pending" / "done" / "error"

	pick_needed_data = list => {
		return list.map(v => {
			return _.pick(v, ['id', 'title', 'category', 'duration', 'coverForFeed']);
		});
	};

	@action
	getData = () => {
		this.fetching_status = 'pending';
		http
			.get('/feed')
			.then(res => {
				let raw_data;
				if (res.status === 200) {
					raw_data = res.data.dailyList[0];
					runInAction(() => {
						this.date = raw_data.date;
						Array.prototype.push.apply(
							this.videoList,
							this.pick_needed_data(raw_data.videoList)
						);
					});
				}
				this.fetching_status = 'done';
			})
			.catch(e => {
				console.log(e);
				this.fetching_status = 'error';
			});
	};
}

let instance = new VideoListStore();
export default instance;
