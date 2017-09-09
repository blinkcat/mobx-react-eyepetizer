import { VideoStore } from './VideoStore';

describe('VideoStore', () => {
	let vs;
	beforeEach(() => {
		vs = new VideoStore();
	});

	afterEach(() => {
		vs = null;
	});

	describe('getData()', () => {
		it('should set state if success', () => {
			const id = 47746;
			return vs.getVideoData(id).then(() => {
				expect(vs.category).not.toBe('');
				expect(vs.title).not.toBe('');
				expect(vs.coverForFeed).not.toBe('');
				expect(vs.description).not.toBe('');
				expect(vs.id).toBe(id);
				expect(vs.duration).not.toBe(0);
				expect(vs.tags.length).not.toBe(0);
				expect(vs.fetching_status).toBe('done');
			});
		});

		it('VideoStore.relatedVideoList and VideoStore.replyList should not be null', () => {
			const id = 48624;
			return vs.getVideoData(id).then(() => {
				expect(vs.relatedVideoList).not.toBe(null);
				expect(vs.replyList).not.toBe(null);
			});
		});
	});
});
