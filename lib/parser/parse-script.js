"use strict";

module.exports = parseScript;

/**
 * Parse the given script source code.
 * @param {string} code The script source code to parse.
 * @param {object} parserOptions The parser options.
 * @returns {object} The parsing result.
 */
function parseScript(code, parserOptions) {
    // eslint-disable-next-line n/no-unpublished-require -- espree is the default parser for ESLint
    const parser = parserOptions.parser ?? require("espree");
    const parserOptionsWithoutParser = Object.assign({}, parserOptions);
    delete parserOptionsWithoutParser.parser;
    const scriptParserOptions = Object.assign(
        {},
        parserOptionsWithoutParser,
        parserOptions.parserOptions,
    );
    const result =
        typeof parser.parseForESLint === "function"
            ? parser.parseForESLint(code, scriptParserOptions)
            : parser.parse(code, scriptParserOptions);
    if (result.ast) {
        return result;
    }
    return {
        ast: result,
    };
}
