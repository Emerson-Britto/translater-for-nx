const app = require('./app');
const devENV = process.env.DEV_ENV;
const PORT = process.env.PORT || devENV;

const consoleLogs = () => {
  console.log('Started: ' + new Date());
  if(devENV) console.log(`root: http://localhost:${PORT}/`);
}

app.listen(PORT, consoleLogs());