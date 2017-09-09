import { observable, action, runInAction } from 'mobx';
import http from 'Utils/http';
import { pick } from 'lodash';

class VideoListStore {
	@observable videoList = [];
	@observable date = 0;
	@observable fetching_status = 'done'; // "pending" / "done" / "error"

	_pickNeededData = list => {
		return list.map(v => {
			return pick(v, ['id', 'title', 'category', 'duration', 'coverForFeed']);
		});
	};

	@action
	getData = () => {
		this.fetching_status = 'pending';
		return http
			.get('/feed')
			.then(res => {
				let raw_data;
				if (res.status === 200) {
					raw_data = res.data.dailyList[0];
					runInAction(() => {
						this.date = raw_data.date;
						Array.prototype.push.apply(
							this.videoList,
							this._pickNeededData(raw_data.videoList)
						);
						this.fetching_status = 'done';
					});
				}
			})
			.catch(e => {
				console.log(e);
				runInAction(() => {
					this.fetching_status = 'error';
				});
			});
	};
}

let instance = new VideoListStore();
export { instance as default, VideoListStore };
