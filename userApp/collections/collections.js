MessagesCollection = new Mongo.Collection('messages');
MessagesCollection.allow({
  insert: function (userId, doc) {
    return userId;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

MessagesCollection.deny({
  insert: function (userId, doc) {
    var fieldsInDoc = _.keys(doc);
    var validFields = ['sender', 'recipient', 'timestamp', 'message', '_id'];
    if (_.difference(fieldsInDoc, validFields).length > 0) {
      console.log('additional fields found');
      return true;
    } else {
      console.log('all fields good');
      return false
    }
  }
});