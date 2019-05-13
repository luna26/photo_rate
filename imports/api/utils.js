export const authorizedUser = (userId) => {
  if (!userId) {
    throw new Meteor.Error('not-authorized');
  }
}