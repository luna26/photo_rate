import { Meteor } from 'meteor/meteor';

//names
import { LINK_INSERT } from '../names';

//utils
import { authorizedUser } from './utils';

//schema
import LinkSchema from '../schemas/link';

Meteor.methods({
  [LINK_INSERT](url) {

    const userId = this.userId;

    authorizedUser(userId);

    LinkSchema.validate({
      url
    });

    Links.insert({
      _id: shortid.generate(),
      userId,
      url,
    });
  }
});