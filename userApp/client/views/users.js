Template.userProfile.helpers({
  userData: function () {
    return Meteor.users.findOne(Session.get('selectedUser'));
  }
});

Template.userProfile.events({
  'click #delete-user': function (evt) {
    evt.preventDefault();
    console.log('deleting ', Meteor.userId());
    // will fail because it is not allowed to remove the user from a restricted collection
    Meteor.users.remove(Meteor.userId());
  }
});

Template.userList.helpers({
  users: function () {
    return Meteor.users.find();
  }
});

Template.userList.events({
  'click .user': function (evt) {
    evt.preventDefault();
    var id = $(evt.currentTarget).attr('data-id');
    Session.set('selectedUser', id);
  }
});