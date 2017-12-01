import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ReplyList } from '../';

const data = [
  {
    id: 940029081393561600,
    createTime: '2017-12-11 09:22',
    hot: true,
    likeCount: 23,
    message: '一直理所当然存在的东西，想不到对于别人是一辈子不能拥有的。感动…',
    avatar:
      'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epNayNzBbGEA7GYzTrZdDvZk8IhE8nPuOfUPpgqEHXiardxbxn2ULNJbNjEkrJQQYia9TcjlqQo0sHQ/0',
    nickname: 'eveho'
  },
  {
    id: 940091198146609200,
    createTime: '2017-12-11 13:29',
    hot: true,
    likeCount: 10,
    message: '这才是我认为的科学，而不是核武器，',
    avatar: 'http://tva2.sinaimg.cn/crop.0.0.720.720.180/d429ee8bjw8eu9m3dydxej20k00k0q3f.jpg',
    nickname: '请叫我口袋先森'
  },
  {
    id: 940068509063315500,
    createTime: '2017-12-11 11:59',
    hot: true,
    likeCount: 9,
    message: '谢谢为世人创造这些的创造者  谢谢你😊',
    avatar:
      'http://wx.qlogo.cn/mmopen/vi_32/icSRqsIicy1UmTDwbZFzfe9PtepWjrA8Z6CP4168Z56YicNUAIQPKswrx2qg1CpkkPEMiccE9oSic3iaE9LS1eAjP3PA/0',
    nickname: 'Smile_'
  },
  {
    id: 940233754582974500,
    createTime: '2017-12-11 22:56',
    hot: false,
    likeCount: 0,
    message:
      '这是我第一次为了一个视频发表评论，说实话，看到他们在那哭着感觉这是不可思议的时候，我很开心，开心他们能够感受到自然的美，他们从书上看到的，远不如自己亲身经历的，自然的美是无法言语的，看到他们哭，我也不禁鼻子一酸，陪他们抽泣，也开心自己能够反思，自己抱怨的事情在某些人看来是幸福的，我们要懂得知足常乐……为我之前嘲笑的，看不起的人表示忏悔，他们在经过我言语上的＊＊时，仍笑对人生，他们是伟大的，再一次表示忏悔——对不起。',
    avatar: 'http://qzapp.qlogo.cn/qzapp/1104373357/5CC27956DDBEE1C581FABFECB61EECD5/100',
    nickname: '煞比i'
  },
  {
    id: 940233582880751600,
    createTime: '2017-12-11 22:55',
    hot: false,
    likeCount: 0,
    message: '感动',
    avatar:
      'http://wx.qlogo.cn/mmopen/vi_32/rIVs0Op1snMLLfzEhan38aqqN5c2V2GLJEVtMMib6cEpuWtGXLyW4ibAV2bWYAic8M7Y7gxsZag5ibGicYPmTH91WwQ/0',
    nickname: '萍'
  },
  {
    id: 940233156622024700,
    createTime: '2017-12-11 22:53',
    hot: false,
    likeCount: 0,
    message: '看哭了\n莫名感动\n“这里和天堂没什么两样”',
    avatar: 'http://img.kaiyanapp.com/25659573af3fff8036e66adfcb347fc0.png',
    nickname: 'But.'
  },
  {
    id: 940233137055596500,
    createTime: '2017-12-11 22:53',
    hot: false,
    likeCount: 0,
    message: '看的我很难受，不敢想象过去那些色盲症人群竟是一生都未曾见过如此美景',
    avatar:
      'http://wx.qlogo.cn/mmopen/eXqJwZmxRQvGjjF4MUsTaNrj67LSHvOGbCicO5n2gLwnGxiccaGfeTibbPtibf6JRurE6sYJfVroWURXbWRaQ4l0KFkXRicaibsBMC/0',
    nickname: 'Old Time'
  },
  {
    id: 940226917204754400,
    createTime: '2017-12-11 22:29',
    hot: false,
    likeCount: 0,
    message:
      '这样的眼镜是有的，他们眼睛的光谱曲线和正常人有些不同，只要原色没有完全重叠，都可以通过特定波长增强来增加原色差异，感受到丰富色彩',
    avatar: 'http://qzapp.qlogo.cn/qzapp/1104373357/E47B7C57263223A8CB5566609AFABD37/100',
    nickname: '闭眼看世界'
  },
  {
    id: 940209123067166700,
    createTime: '2017-12-11 21:18',
    hot: false,
    likeCount: 0,
    message: '可以做成眼镜么？',
    avatar:
      'http://img.kaiyanapp.com/e4c34fd79cb85548d0774fa5a0a55741.jpeg?imageMogr2/quality/60/format/jpg',
    nickname: '志明与梓晴'
  },
  {
    id: 940191791183822800,
    createTime: '2017-12-11 20:09',
    hot: false,
    likeCount: 0,
    message: '希望未来做成眼镜',
    avatar:
      'http://wx.qlogo.cn/mmopen/vi_32/jkGxCBsM61BemJpUk5NpTEqjmicAnrJu4XtGoicX5T73aXticySYwRtWxvR3RRFKtrXZ1JkRha8s98M2sY4XkUP4A/0',
    nickname: '　　　luckyhp0618'
  },
  {
    id: 940167456998031400,
    createTime: '2017-12-11 18:32',
    hot: false,
    likeCount: 1,
    message: '当你看到自己知道却无法看到的东西，内心的满足，这个应该给精选',
    avatar: 'http://qzapp.qlogo.cn/qzapp/1104373357/444DD53D3F443404A138E1A687D3F17B/100',
    nickname: '爸比哇哇'
  },
  {
    id: 940107633723965400,
    createTime: '2017-12-11 14:35',
    hot: false,
    likeCount: 1,
    message: '我敢说  这绝对是一辈子的体验',
    avatar: 'http://qzapp.qlogo.cn/qzapp/111111/942FEA70050EEAFBD4DCE2C1FC775E56/100',
    nickname: '清净的点心师'
  },
  {
    id: 940102783921553400,
    createTime: '2017-12-11 14:15',
    hot: false,
    likeCount: 0,
    message: '早就有了',
    avatar: 'http://img.kaiyanapp.com/98bae6393511c225d82869a3fdd215f8.png',
    nickname: '材韩'
  }
];

describe('Component ReplyList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ReplyList replyList={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
