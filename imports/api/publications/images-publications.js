import {
  Meteor
} from 'meteor/meteor';

import { PUB_FILES_IMAGES_ALL } from '../names';

export default (Images) => {
  publishFunction(PUB_FILES_IMAGES_ALL, function(){
    return getAllPhotos(Images);
  });
}

//meteor publish data function 
const publishFunction = (pubName, callback) => {
  Meteor.publish(pubName, callback);
}

const getAllPhotos = (Images) => {
  return Images.find().cursor;
}