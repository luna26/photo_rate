import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  owner: {
    type: String,
    required: true,
  }
});