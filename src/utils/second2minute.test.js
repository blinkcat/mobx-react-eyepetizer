import s2m from './second2minute';

describe('second2minute', () => {
	it('second2minute(276) should equal 4\' 36"', () => {
		expect(s2m(276)).toBe('4\' 36"');
	});

	it('second2minute(30) should equal 0\' 30"', () => {
		expect(s2m(30)).toBe('0\' 30"');
	});

	it('second2minute("164") should equal 2\' 44"', () => {
		expect(s2m('164')).toBe('2\' 44"');
	});
});
