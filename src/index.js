if (process.env.NODE_ENV === 'development') {
	require('./app.dev.js');
} else {
	require('./app.js');
}
