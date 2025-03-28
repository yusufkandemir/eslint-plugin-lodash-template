---
pageClass: "rule-details"
sidebarDepth: 0
title: "lodash-template/no-semi-in-template-interpolation"
description: "disallow the semicolon at the end of expression in micro template interpolation.(ex. :ok: `<%= text %>` :ng: `<%= text; %>`)"
---

# lodash-template/no-semi-in-template-interpolation

> disallow the semicolon at the end of expression in micro template interpolation.(ex. :ok: `<%= text %>` :ng: `<%= text; %>`)

- :gear: This rule is included in all of `"plugin:lodash-template/best-practices"`, `"plugin:lodash-template/recommended"`, `"plugin:lodash-template/recommended-with-html"`, `"plugin:lodash-template/recommended-with-script"` and `"plugin:lodash-template/all"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule Details

This rule disallow the semicolon at the end of expression in micro template interpolation.

<!-- prettier-ignore -->
```html
<% /* eslint "lodash-template/no-semi-in-template-interpolation": "error" */ %>
<!-- ✓ GOOD -->
<%= text %>

<!-- ✗ BAD -->
<%= text; %>
```

## Implementation

- [Rule source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/lib/rules/no-semi-in-template-interpolation.js)
- [Test source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/tests/lib/rules/no-semi-in-template-interpolation.js)
