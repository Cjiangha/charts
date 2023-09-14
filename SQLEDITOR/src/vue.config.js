/*
 * @Author: 张飞青
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-22 10:46:30
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
 */
let path = require('path');

function resolve (dir) {
    path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                '@': resolve('src')
            }
        }
    }
}
