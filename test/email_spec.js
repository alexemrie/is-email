var assert = require('assert');
var isEmail = require('./../index');

describe('Emails', function() {
    describe('Basic', function () {
        it('returns true for valid email', function () {
            assert.equal(isEmail("test@example.com"), true);
        });

        it('returns false for invalid email', function() {
            assert.equal(isEmail("test"), false);
        });
    });

    describe('Examples', function() {
        var validEmails = [
            "email@example.com",
            "firstname.lastname@example.com",
            "email@subdomain.example.com",
            "firstname+lastname@example.com",
            "email@[123.123.123.123]",
            "\“email\”@example.com",
            "1234567890@example.com",
            "email@example-one.com",
            "_______@example.com",
            "email@example.name",
            "email@example.museum",
            "email@example.co.jp",
            "firstname-lastname@example.com"
        ];

        var invalidEmails = [
            "plainaddress",
            "#@%^%#$@#$@#.com",
            "@example.com",
            "Joe Smith <email@example.com>",
            "email.example.com",
            "email@example@example.com",
            ".email@example.com",
            "email.@example.com",
            "email..email@example.com",
            "email@example.com (Joe Smith)",
            "email@example",
            "email@111.222.333.44444",
            "email@example..com",
            "Abc..123@example.com"
        ];

        validEmails.forEach(function(el) {
            console.log(el, isEmail(el));

            it('returns true for valid email: ' + el, function() {
                assert.equal(isEmail(el), true);
            });
        });

        invalidEmails.forEach(function(el) {
            console.log(el, isEmail(el));

            it('returns false for invalid email: ' + el, function() {
                assert.equal(isEmail(el), false);
            });
        });
    });
});