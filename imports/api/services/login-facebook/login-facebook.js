const APP_ID = '459822244753716';
const SECRET = 'ddcdcf0bf30349e98b6add51aab52a9f';

export default () => {
  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: APP_ID,
    secret: SECRET
  });
}