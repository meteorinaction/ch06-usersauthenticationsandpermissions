Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
    user.profile = options.profile;
  } else {
    user.profile = {};
  }
  user.profile.rank = 'White belt';
  if (options.email) {
    Meteor.setTimeout(function () {
      Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);
  }
  return user;
});