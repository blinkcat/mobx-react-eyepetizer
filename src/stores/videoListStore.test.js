import { VideoListStore } from './videoListStore';

describe('VideoListStore', () => {
	let vls;
	beforeEach(() => {
		vls = new VideoListStore();
	});

	afterEach(() => {
		vls = null;
	});

	describe('constructor()', () => {
		it('has an initial state', () => {
			expect(vls.videoList).toBeInstanceOf(Array);
			expect(vls.date).toBe(0);
			expect(vls.fetching_status).toBe('done');
		});
	});

	describe('getData()', () => {
		it('should set state if success', () => {
			return vls.getData().then(() => {
				expect(vls.videoList.length).not.toBe(0);
				expect(vls.data).not.toBe(0);
				expect(vls.fetching_status).toBe('done');
			});
		});
	});
});
