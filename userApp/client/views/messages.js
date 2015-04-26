Template.messageBoard.helpers({
  messages: function () {
    return MessagesCollection.find({
      recipient: Session.get('selectedUser')
    }, {
      sort: {
        timestamp: -1
      }
    });
  }
});

Template.message.helpers({
  getUserName: function (id) {
    if (id) {
      return Meteor.users.findOne({
        _id: id
      }, {
        username: 1
      }).username || 'anonymous';
    }
  }
});
Template.message.events({
  'click button.btn-delete': function (evt) {
    evt.preventDefault();
    var id = $(evt.currentTarget).data('id');
    console.log(id);
    console.log('deleting message ', id);
    var deleteConfirmation = confirm('Really delete the message?');
    if (deleteConfirmation) {
      MessagesCollection.remove({
        _id: id
      });
    }
    showMessage('Message deleted', 'status-message');
  }
});

Template.messageForm.events({
  'click #sendmessage': function (evt) {
    evt.preventDefault();
    var message = $('input#message').val();
    var timestamp = new Date();
    console.log(message);
    $('input#message').val('');
    MessagesCollection.insert({
      sender: Meteor.userId(),
      recipient: Session.get('selectedUser'),
      message: message,
      timestamp: timestamp
    });
    showMessage('Message sent', 'status-message');
  }
})