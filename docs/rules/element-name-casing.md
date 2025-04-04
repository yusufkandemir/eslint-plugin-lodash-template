---
pageClass: "rule-details"
sidebarDepth: 0
title: "lodash-template/element-name-casing"
description: "enforce HTML element name casing. (ex. :ok: `<xxx-element>` :ng: `<xxxElement>` `<DIV>`)"
---

# lodash-template/element-name-casing

> enforce HTML element name casing. (ex. :ok: `<xxx-element>` :ng: `<xxxElement>` `<DIV>`)

- :gear: This rule is included in `"plugin:lodash-template/recommended-with-html"` and `"plugin:lodash-template/all"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule Details

This rule enforces element name casing style (kebab-case).

<!-- prettier-ignore -->
```html
<% /* eslint "lodash-template/element-name-casing": "error" */ %>
<!-- ✓ GOOD -->
<div>
<xxx-element>

<!-- ✗ BAD -->
<DIV>
<xxxElement>
```

## Further Reading

- [Web Components | MDN _Using custom elements_](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

## Implementation

- [Rule source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/lib/rules/element-name-casing.js)
- [Test source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/tests/lib/rules/element-name-casing.js)
