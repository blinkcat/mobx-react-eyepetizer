import videoStore from 'Stores/videoStore';
import http from 'Utils/http';
import { reduce, pick, set, get, unset } from 'lodash';

const pickNeededData = data =>
	reduce(
		[
			data =>
				pick(data, [
					'id',
					'title',
					'category',
					'duration',
					'coverForFeed',
					'coverBlurred',
					'description',
					'tags',
					'playInfo[1].url'
				]),
			data => {
				set(
					data,
					'tags',
					reduce(
						get(data, 'tags', []),
						(arr, v) => {
							arr.push(v.name);
							return arr;
						},
						[]
					)
				);
				return data;
			},
			data => {
				set(data, 'playUrl', get(data, 'playInfo[1].url', ''));
				unset(data, 'playInfo');
				return data;
			}
		],
		(d, f) => f(d),
		data
	);

export function loadVideoData(id) {
	if (!id) {
		return;
	}
	videoStore.setIsFetching(true);
	return http
		.get(`/video/${id}`)
		.then(res => {
			if (res.status === 200) {
				videoStore.setVideoInfo(pickNeededData(res.data));
			}
		})
		.catch(e => {
			console.error('service video', 'loadData', e); //eslint-disable-line no-console
		})
		.then(() => {
			videoStore.setIsFetching(false);
		});
}

export function clear() {
	videoStore.clear();
}

export function setId(id) {
	videoStore.setId(id);
}
