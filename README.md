# QuickTube

3x Faster than Youtube


## Getting Started
### Install
```bash
npm install
```

Create a new file ```src/secrets.js```
```javascript
export default {
  // get your key from from: https://developers.google.com/youtube/v3/getting-started
  API_KEY_YOUTUBE: "MY_KEY_HERE"
};

```

### Run
```bash
npm start
```


## Deploying (to AWS s3)
[Guide](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a) to deploying React/Redux on s3

1. Create a new file ```/secrets.js```
```javascript
module.exports = {
  user: 's3-user',
  accessKeyId: 'MY-ACCESS-KEY-ID',
  key: 'MY-ACCESS-KEY',
  bucket: 'MY-S3-BUCKET-NAME',
};
```

2. Command line
```bash
// build
npm run build
// deploy
npm run deploy
```
