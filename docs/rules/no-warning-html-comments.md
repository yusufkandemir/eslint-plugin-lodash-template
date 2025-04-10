---
pageClass: "rule-details"
sidebarDepth: 0
title: "lodash-template/no-warning-html-comments"
description: "disallow specified warning terms in HTML comments. (ex. :ng: `<!-- TODO:task -->`)"
---

# lodash-template/no-warning-html-comments

> disallow specified warning terms in HTML comments. (ex. :ng: `<!-- TODO:task -->`)

- :gear: This rule is included in `"plugin:lodash-template/recommended-with-html"` and `"plugin:lodash-template/all"`.

## Rule Details

This rule reports HTML comments that include any of the predefined terms specified in its configuration.

<!-- prettier-ignore -->
```html
<% /* eslint "lodash-template/no-warning-html-comments": "error" */ %>
<!-- TODO -->
```

## Implementation

- [Rule source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/lib/rules/no-warning-html-comments.js)
- [Test source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/tests/lib/rules/no-warning-html-comments.js)
