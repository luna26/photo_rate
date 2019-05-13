import {
  Meteor
} from 'meteor/meteor';

//collections
import '../imports/api/collections/images';

//services
import facebookLogin from '../imports/api/services/login-facebook/login-facebook';

Meteor.startup(() => {
  // console.log('path', process.env);
  facebookLogin();
});