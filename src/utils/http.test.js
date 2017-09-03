import http from './http';

describe('http', () => {
	it('exists', () => {
		expect(http).toBeDefined();
	});
	it('has method get/post', () => {
		expect(http).toHaveProperty('get');
		expect(http).toHaveProperty('post');
	});
	describe('http.get', () => {
		it('is function', () => {
			expect(typeof http.get).toBe('function');
		});
	});
	describe('http.post', () => {
		it('is function', () => {
			expect(typeof http.post).toBe('function');
		});
	});
});
