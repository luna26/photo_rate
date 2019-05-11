import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  url: {
    type: String,
    label: 'Your link',
    regEx: SimpleSchema.RegEx.Url
  }
});