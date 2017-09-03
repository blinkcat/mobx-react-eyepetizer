import { observable, action, runInAction } from 'mobx';
import http from 'Utils/http';
import _ from 'lodash';

class VideoStore {
	@observable category = '';
	@observable duration = 0;
	@observable title = '';
	@observable coverForFeed = '';
	@observable description = '';
	@observable tags = [];
	@observable id = '';
	@observable fetching_status = 'done'; // "pending" / "done" / "error"

	_pickNeededData = data =>
		_.reduce(
			[
				data =>
					_.pick(data, [
						'id',
						'title',
						'category',
						'duration',
						'coverForFeed',
						'description',
						'tags'
					]),
				data =>
					_.set(
						data,
						'tags',
						_.reduce(
							_.get(data, 'tags', []),
							(arr, v) => {
								arr.push(v.name);
								return arr;
							},
							[]
						)
					)
			],
			(d, f) => f(d),
			data
		);

	@action
	getVideoData(id) {
		this.fetching_status = 'pending';
		return http
			.get(`/video/${id}`)
			.then(res => {
				let raw_data;
				if (res.status === 200) {
					raw_data = res.data;
					runInAction(() => {
						_.merge(this, this._pickNeededData(raw_data));
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
	}
}

const instance = new VideoStore();

export { instance as default, VideoStore };
