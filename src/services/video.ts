import videoStore from 'Stores/videoStore';
import http from 'Utils/http';
import { reduce, pick, set, get, unset } from 'lodash';
import * as storeTypes from 'Stores/types';

const pickNeededData: (data: any) => storeTypes.VideoInfo = data => {
  const newData: storeTypes.VideoInfo = pick(data, [
    'id',
    'title',
    'category',
    'duration',
    'coverForFeed',
    'coverBlurred',
    'description',
    'tags',
    'playInfo[1].url'
  ]);
  set(newData, 'playUrl', get(newData, 'playInfo[1].url', ''));
  unset(data, 'playInfo');
  set(newData, 'tags', get(data, 'tags', []).map((v: { name: string }) => v.name));
  return newData;
};

export function loadVideoData(id: string | number) {
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
      console.error('service video', 'loadData', e); // tslint:disable-line: no-console
    })
    .then(() => {
      videoStore.setIsFetching(false);
    });
}

export function clear() {
  videoStore.clear();
}
