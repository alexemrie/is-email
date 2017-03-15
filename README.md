is-email
================
Package for testing whether a string is a valid email.

* Validates each email according to [RFC 5322](https://www.ietf.org/rfc/rfc5322.txt) guidelines. See [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) for specific technical details.

Installation
-----

```bash
npm install is-email --save
```

Usage
-----


```Javascript
var isEmail = require('is-email');

isEmail("email@example.com");       // true
isEmail("email@[123.123.123.123]"); // true

isEmail("#@%^%#$@#$@#.com");        // false
isEmail("email");                   // false

```

Support
-----

Find this package useful? Support it on [GitHugz](http://www.githugz.com/projects/npm/is-email)!