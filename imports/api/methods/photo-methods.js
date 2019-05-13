import shortid from 'shortid';

//names
import {
  PHOTO_INSERT,
  PHOTO_ADD_RATE,
  PHOTO_REMOVE_RATE
} from '../names';

//schemas
import PhotoSchema from '../schemas/photo/photo';
import RateSchema from '../schemas/photo/rating';

//utils
import {
  authorizedUser
} from '../utils';

export default (Photos) => {
  return ({

    //insert new photo
    [PHOTO_INSERT]({
      photoName,
      fileObj
    }) {

      const userId = this.userId;
      authorizedUser(userId);

      const data = {
        _id: shortid.generate(),
        userId,
        photoName,
        idImage: fileObj._id,
        ratings: []
      }

      PhotoSchema.validate(data);
      Photos.insert(data);
    },

    //insert rate photo
    [PHOTO_ADD_RATE](photoId) {

      const userId = this.userId;
      authorizedUser(userId);

      const data = {
        owner: this.userId
      }

      RateSchema.validate(data);
      Photos.update({
        _id: photoId
      }, {
        $push: {
          ratings: data
        }
      });
    },

    //remove rate photo
    [PHOTO_REMOVE_RATE](photoId) {

      const userId = this.userId;
      authorizedUser(userId);

      Photos.update({
        _id: photoId
      }, {
        $pull: {
          ratings: {
            owner: userId
          }
        }
      });
    }
  });
}