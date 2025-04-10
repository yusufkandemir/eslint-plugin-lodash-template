---
pageClass: "rule-details"
sidebarDepth: 0
title: "lodash-template/html-comment-content-newline"
description: "require or disallow a line break before and after HTML comment contents"
---

# lodash-template/html-comment-content-newline

> require or disallow a line break before and after HTML comment contents

- :gear: This rule is included in `"plugin:lodash-template/recommended-with-html"` and `"plugin:lodash-template/all"`.
- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule Details

This rule enforces a line break (or no line break) before and after HTML comment contents.

```html
<% /* eslint "lodash-template/html-comment-content-newline": "error" */ %>
<!-- ✓ GOOD -->
<!-- singleline comment -->
<!--
  multiline
  comment
-->

<!-- ✗ BAD -->
<!--
  singleline comment
-->
<!--
  multiline
  comment -->
<!-- multiline
  comment -->
```

## Options

```js
{
    "lodash-template/html-comment-content-newline": [
        "error",
        {
            "singleline": "never",
            "multiline": "always"
        }
    ]
}
```

- `singleline` ... the configuration for single-line comments.
    - `"ignore"` ... Don't enforce line breaks style before and after the comments.
    - `"never"` ... disallow line breaks before and after the comments. This is the default.
    - `"always"` ... require one line break before and after the comments.
- `multiline` ... the configuration for multiline comments.
    - `"ignore"` ... Don't enforce line breaks style before and after the comments.
    - `"never"` ... disallow line breaks before and after the comments.
    - `"always"` ... require one line break before and after the comments. This is the default.

<!-- prettier-ignore -->
```html
<% /* eslint
  lodash-template/html-comment-content-newline: ["error", {
    "singleline": "always",
    "multiline": "never"
  }]
*/ %>
<!--
  ✓ GOOD
-->
<!--
  comment
-->

<!-- comment
  comment -->

<!-- ✗ BAD -->
<!-- comment -->

<!--
  comment
  comment
-->

```

## Further Reading

- [HTML5 Style Guide - W3Schools _HTML Comments_](https://www.w3schools.com/html/html5_syntax.asp)

## Implementation

- [Rule source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/lib/rules/html-comment-content-newline.js)
- [Test source](https://github.com/yusufkandemir/eslint-plugin-lodash-template/blob/master/tests/lib/rules/html-comment-content-newline.js)
