import * as React from 'react';
// import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { VideoCard } from '../';

const data = {
  vid: 63497,
  title: '今晚不回家，和他们一起玩极限运动吧！',
  meta: '#运动 / 9\' 00"',
  cover: 'http://img.kaiyanapp.com/89a71472972700945d8814c4064069b3.jpeg?imageMogr2/quality/60/format/jpg'
};

describe('VideoCard Component', () => {
  describe('Home Page Feed Video', () => {
    it('allows us to set props', () => {
      const card = shallow(<VideoCard {...data} />);
      expect(card.find('.title').length).toBe(1);
    });
  });
});
