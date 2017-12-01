import { second2minute, dataFormat } from './';

describe('second2minute', () => {
  it('second2minute(276) should equal 4\' 36"', () => {
    expect(second2minute(276)).toBe('4\' 36"');
  });

  it('second2minute(613) should equal 10\' 13"', () => {
    expect(second2minute(613)).toBe('10\' 13"');
  });

  it('second2minute(540) should equal 9\' 00"', () => {
    expect(second2minute(540)).toBe('9\' 00"');
  });

  it('second2minute(30) should equal 0\' 30"', () => {
    expect(second2minute(30)).toBe('0\' 30"');
  });

  it('second2minute("164") should equal 2\' 44"', () => {
    expect(second2minute('164')).toBe('2\' 44"');
  });

  it('second2minute() should equal 0\' 00"', () => {
    expect(second2minute()).toBe('0\' 00"');
  });
});

describe('dataFormat', () => {
  it('dataFormat(1512967359000) should equal 2017-12-11 12:42', () => {
    expect(dataFormat(1512967359000)).toBe('2017-12-11 12:42');
  });

  it('dataFormat(1491193279000) should equal 2017-04-03 12:21', () => {
    expect(dataFormat(1491193279000)).toBe('2017-04-03 12:21');
  });

  it('dataFormat(1478003016000) should equal 2016-11-01 20:23', () => {
    expect(dataFormat(1478003016000)).toBe('2016-11-01 20:23');
  });

  it('dataFormat(1477314197000) should equal 2016-10-24 21:03', () => {
    expect(dataFormat(1477314197000)).toBe('2016-10-24 21:03');
  });

  it('dataFormat(1477273619000) should equal 2016-10-24 09:46', () => {
    expect(dataFormat(1477273619000)).toBe('2016-10-24 09:46');
  });
});
