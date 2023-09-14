/*
 * @Author: 张飞青
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 18:10:45
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
 */
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/fold/foldgutter.css'

import 'codemirror/mode/sql/sql.js' // 对于sql模式的支持
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/addon/edit/closebrackets' // 自动补全
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/selection/active-line'