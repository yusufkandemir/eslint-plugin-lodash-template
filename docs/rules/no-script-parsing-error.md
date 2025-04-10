---
pageClass: "rule-details"
sidebarDepth: 0
title: "lodash-template/no-script-parsing-error"
description: "disallow parsing errors in template"
---

# lodash-template/no-script-parsing-error

> disallow parsing errors in template

- :gear: This rule is included in all of `"plugin:lodash-template/base"`, `"plugin:lodash-template/all"`, `"plugin:lodash-template/best-practices"`, `"plugin:lodash-template/recommended"`, `"plugin:lodash-template/recommended-with-html"` and `"plugin:lodash-template/recommended-with-script"`.

## Rule Details

This rule reports syntax errors in JavaScript template.  
This rule works when verification of ["JavaScript Templates"](../index.md#for-javascript-templates) is enabled.

<!-- prettier-ignore -->
```js
/* eslint "lodash-template/no-script-parsing-error": "error" */
/* ✓ GOOD */
<% if (a) { %>
  const a = 'ABC'
<% } else { %>
  const a = 'DEF'
<% } %>
```

<!-- prettier-ignore -->
```js
/* eslint "lodash-template/no-script-parsing-error": "error" */
/* ✗ BAD */
<% if (a) { %>
  const a = 'ABC'
<% } %>
const a = 'DEF'
```

## Implementation

- [Rule source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/lib/rules/no-script-parsing-error.js)
- [Test source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/tests/lib/rules/no-script-parsing-error.js)
