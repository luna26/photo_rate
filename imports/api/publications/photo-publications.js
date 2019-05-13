import {
  Meteor
} from 'meteor/meteor';

//names
import {
  PUB_PHOTOS
} from '../names';

export default (Photos) => {
  publishFunction(PUB_PHOTOS, function(){
    return getAllPhotos(Photos, this.userId);
  });
}


//meteor publish data function 
const publishFunction = (pubName, callback) => {
  Meteor.publish(pubName, callback);
}

const getAllPhotos = (Photos, id) => {
  return Photos.find({
    userId: id
  });
}