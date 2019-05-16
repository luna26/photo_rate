import shortid from 'shortid';

//names
import {
  PHOTO_ADD_RATE,
  PHOTO_REMOVE_RATE
} from '../names';

//schemas
import RateSchema from '../schemas/photo/rating';

//utils
import {
  authorizedUser
} from '../utils';

export default (Images) => {
  return ({

    //insert rate photo
    [PHOTO_ADD_RATE](photoId) {

      const userId = this.userId; 
      authorizedUser(userId);

      const {pictureUrl, name} = Meteor.user().services.facebook;

      const data = {
        owner: this.userId,
        pictureUrl,
        name
      }
      
      // RateSchema.validate(data);

      Images.update({
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

      Images.update({
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