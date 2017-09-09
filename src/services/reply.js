import http from 'Utils/http';
import { pick } from 'lodash';
import replyListStore from 'Stores/replyListStore';

const pickNeededData = data =>
	pick(data, ['id', 'hot', 'likeCount', 'message', 'createTime', 'user.nickname', 'user.avatar']);

export function loadReplyData(id) {
	replyListStore.setIsFetching(true);
	return http
		.get(`/replies/video?id=${id}&num=${replyListStore.pageNum}`)
		.then(res => {
			if (res.status === 200) {
				replyListStore.setTotal(res.data.total);
				replyListStore.setList(res.data.replyList.map(v => pickNeededData(v)));
			}
		})
		.catch(e => {
			console.error('service reply', 'loadReplyData', e); //eslint-disable-line no-console
		})
		.then(() => {
			replyListStore.setIsFetching(false);
		});
}
