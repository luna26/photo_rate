import SimpleSchema from 'simpl-schema';
import RatingSchema from './rating';

export default new SimpleSchema({
  _id: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },

  photoName: {
    type: String,
    required: true,
  },

  idImage: {
    type: String,
    required: true
  },

  ratings: {
    type: Array,
    required: true
  },

  "ratings.$": {
    type: RatingSchema,
  },
});