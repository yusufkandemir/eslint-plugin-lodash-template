---
pageClass: "rule-details"
sidebarDepth: 0
title: "lodash-template/no-html-comments"
description: "disallow HTML comments. (ex. :ng: `<!-- comment -->`)"
---

# lodash-template/no-html-comments

> disallow HTML comments. (ex. :ng: `<!-- comment -->`)

- :gear: This rule is included in `"plugin:lodash-template/recommended-with-html"` and `"plugin:lodash-template/all"`.

## Rule Details

This rule reports HTML comments.

<!-- prettier-ignore -->
```html
<% /* eslint "lodash-template/no-html-comments": "error" */ %>
<% /* ✓ GOOD */ %>

<!-- ✗ BAD -->
```

## Implementation

- [Rule source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/lib/rules/no-html-comments.js)
- [Test source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/tests/lib/rules/no-html-comments.js)
