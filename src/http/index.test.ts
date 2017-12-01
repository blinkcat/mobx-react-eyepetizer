import eyeDb, { EyeDB, BASEURL } from './index';
import get from 'lodash.get';
import nock from 'nock';

describe('EyeDB', () => {
  it('is instance of EyeDB', () => {
    expect(eyeDb).toBeInstanceOf(EyeDB);
  });

  const methods = ['feed', 'video.detail', 'video.related', 'video.replies'];
  describe('Methods:', () => {
    methods.forEach(method => {
      describe(`${method}`, () => {
        const mockFn = jest.fn();
        const data = { content: 'hi' };

        beforeAll(() => {
          // mock
          nock(BASEURL)
            .get(/.+/)
            .reply(200, { data, status: 200, statusText: 'ok' });
          return get(eyeDb, method)
            .call(eyeDb, 10)
            .then(mockFn);
        });

        it('is a function', () => {
          expect(get(eyeDb, method)).toBeInstanceOf(Function);
        });

        it('returns a promise', () => {
          expect(mockFn.mock.calls.length).toBeGreaterThan(0);
        });

        it('gets a successful response', () => {
          expect(mockFn.mock.calls[0][0].data).toEqual(data);
        });
      });
    });
  });
});
