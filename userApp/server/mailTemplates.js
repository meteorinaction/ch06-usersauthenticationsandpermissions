Accounts.emailTemplates.siteName = 'Meteor in Action userApp';
Accounts.emailTemplates.from = 'Stephan <stephan@meteorinaction.com>';
Accounts.emailTemplates.verifyEmail.subject = function (user) {
  return 'Confirm Your Email Address, ' + user.username;
};
Accounts.emailTemplates.verifyEmail.text = function (user, url) {
  return 'Welcome to the Meteor in Action userApp!\n' + 'To verify your email address go ahead and follow the link below:\n\n' + url;
};
Accounts.emailTemplates.verifyEmail.html = function (user, url) {
  return '<h1>Welcome to the Meteor in Action userApp!</h1>' + '<p>To <strong>verify your email address</strong> go ahead and follow the link below:</p>' + url;
};