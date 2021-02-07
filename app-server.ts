import * as Express from 'express';
import * as Path from 'path';

const app = Express();
const api = '/api';

app.get(`${api}/ping`, (_request, response) => {
  response.send('pong');
});

app.get(`${api}/hello`, (_request, response) => {
  response.json({
    hello: 'world'
  });
});

app.use(Express.static(__dirname));
app.get('/*', (_request, response) => {
  response.sendFile(Path.join(__dirname, '/index.html'));
});

const port = process.env.PORT ? +process.env.PORT : 3000;
const host = process.env.HOST;
const callbackFn = (p: number) => {
  console.log(`Merlov 🚀 app started on port ${p}`);
};
console.log(`HOST: ${host ? host : 'env variable is not set'}`);
console.log(`PORT: ${port ? port : 'env variable is not set'}`);
host
  ? app.listen(port, host, () => callbackFn(port))
  : app.listen(port, () => callbackFn(port));
