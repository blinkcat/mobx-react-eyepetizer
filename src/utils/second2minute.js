export default function second2minute(duration = 0) {
	duration = ~~duration;
	let minute = Math.floor(duration / 60);
	let second = duration % 60;
	return `${minute}' ${second}"`;
}
