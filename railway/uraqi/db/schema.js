define('User', function () {
    property('email', String, { index: true });
    property('password', String);
    property('activated', Boolean, {default: false});
});

var User = describe('User', function () {
    property('email', String);
    property('password', String);
    property('approved', Boolean);
});