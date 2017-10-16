if (process.env.NODE_ENV === 'development') {
  require('./app.dev.tsx');
} else {
  require('./app.js');
}
