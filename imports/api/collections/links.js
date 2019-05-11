import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

//names
import { PUB_LINKS, LINKS } from '../names';

export const Links = new Mongo.Collection(LINKS);

if (Meteor.isServer) {
  Meteor.publish(PUB_LINKS, function () {
    return Links.find({
      userId: this.userId
    });
  });
};