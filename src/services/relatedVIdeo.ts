import relatedVideoListStore from 'Stores/relatedVideoListStore';
import http from 'Utils/http';
import { pick } from 'lodash';
import * as storeTypes from 'Stores/types';

const pickNeededData: (data: any) => storeTypes.VideoItemProp = data =>
  pick(data, ['title', 'id', 'category', 'duration', 'coverForFeed']);

export function loadRelatedVideoData(relatedId) {
  relatedVideoListStore.setIsFetching(true);
  return http
    .get(`/video/related/${relatedId}?num=${relatedVideoListStore.pageNum}`)
    .then(res => {
      if (res.status === 200) {
        relatedVideoListStore.setList(res.data.videoList.map(item => pickNeededData(item)));
      }
    })
    .catch(e => {
      console.error('service relatedVideo', 'loadData', e); // tslint:disable-line: no-console
    })
    .then(() => {
      relatedVideoListStore.setIsFetching(false);
    });
}

export function clear() {
  relatedVideoListStore.setList([]);
}
