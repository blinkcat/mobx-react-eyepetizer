import axios from 'axios';
import set from 'lodash.set';

// 创建一个axios实例
// 对实例进行基本的配置
export const BASEURL = 'https://baobab.kaiyanapp.com/api/v1/';
const request = axios.create({
  baseURL: BASEURL
});

// Add a response interceptor
request.interceptors.response.use(
  res => {
    // Do something with response data
    if (res.status >= 200 || res.status < 300) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject({
        messages: res.statusText,
        status: res.status,
        statusText: res.statusText
      });
    }
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

/**
 * 底层使用axios，返回几个实例方法，忠实地在promise中返回所有的数据
 *
 * @class EyeDB
 */
export class EyeDB {
  public feed: () => Promise<any>;
  public video: {
    detail: (videoId: number | string) => Promise<any>;
    related: (videoId: number | string, params?: { num: number }) => Promise<any>;
    replies: (videoId: number | string, params?: { num: number }) => Promise<any>;
  };

  constructor() {
    // add feed method，return homepage recommended videoList promise
    this.feed = () => request.get('/feed');
    this.video = {
      // add video.detail method，return video detail promise
      detail(videoId) {
        return request.get(`/video/${videoId}`);
      },
      // add video.related method, return related video promise
      related(videoId, params = { num: 10 }) {
        return request.get(`/video/related/${videoId}`, { params });
      },
      // add video.replies method, return video replies promise
      replies(videoId, params = { num: 10 }) {
        return request.get(`/replies/video`, {
          params: set(params, 'id', videoId)
        });
      }
    };
  }
}

// export instance
const instance = new EyeDB();
export default instance;
