/*
 * @Author: 张飞青
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-25 09:56:17
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
 */

// declare global: sqlLint
import CodeMirror from 'codemirror';

(function (factory) {
  if (typeof exports === 'object' && typeof module === 'object') { // CommonJS
    factory(require('codemirror'));
  }else { // Plain browser env
    factory(CodeMirror);
  }
})(function (CodeMirror) {
  'use strict';

  CodeMirror.registerHelper('lint', 'sql', function (text) {
    var found = [];
    if (!window.sqlLint) {
      if (window.console) {
        window.console.log('Error: window.sqlLint not defined, CodeMirror sql linting cannot run.');
      }
      return found;
    }
    // for sqlLint's web dist sqlLint is exported as an object with a single property parser, of which parseError
    // is a subproperty
    var sqlLint = window.sqlLint.parser || window.sqlLint;

    sqlLint.processError = function (err) {
      let {message, location} = err;
      // console.log(err, message, location, hash, loc, text);
      if (location) {
        found.push({from: CodeMirror.Pos(location.start.line - 1, location.start.column - 1),
          to: CodeMirror.Pos(location.end.line - 1, location.end.column - 1),
          message: message});
        return;
      }
    };

    const method = sqlLint.parse || sqlLint.astify;

    if (method) {
      try { method(text); } catch (e) { sqlLint.processError(e); }
      return found;
    }
    try { let err = sqlLint.parseSyntax(text); if (err) throw err; } catch (e) { sqlLint.processError(e); }
    return found;
  });

  return CodeMirror;
});
