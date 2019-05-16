import {
  Accounts
} from 'meteor/accounts-base';

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

  Accounts.onCreateUser(function (options, user) {
    if (user.services.facebook) {
      user.services.facebook.pictureUrl = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    };

    return user;
  });

  Meteor.publish("getUserData", function () {
    let userData = Meteor.users.find({
      _id: this.userId
    });

    return userData;
  });
};