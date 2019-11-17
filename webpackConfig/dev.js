//   入口和出口文件配置
var glob = require('glob')
var fs = require('fs');
var path = require('path');
const dev={
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9000,
        https:true,
        host:'localhost',
    },



}









module.exports = dev