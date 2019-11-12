//   入口和出口文件配置
var glob = require('glob')
var fs = require('fs');
var path = require('path');

function getJsonFiles(jsonPath) {
    let jsonFiles = [];
    function findJsonFile(_path) {
        try {
            let files = fs.readdirSync(_path);
            files.forEach(function (item, index) {
                let fPath = path.join(_path, item);
                let stat = fs.statSync(fPath);
                if (stat.isDirectory() === true) {
                    findJsonFile(fPath);
                }
                if (stat.isFile() === true) {
                    jsonFiles.push(item);
                }
            });
        } catch (e) {
            throw _path + '目录不存在或者路径错误'
        }

    }
    findJsonFile(jsonPath);
    return jsonFiles
}
function getFile(_path) {
    var entry = {}
    var fileArrays = getJsonFiles(_path)
    fileArrays.map(v => {
        let name = v.replace(/\.js/gi, '').toLowerCase()
        entry[name] = _path + '/' + v
    })
    return entry
}
function genratorOutput(options) {
    const { mode = "one", entry } = options
    return mode === 'one' ? {
        entry: { index: entry },
        output: {
            path: path.resolve(__dirname, '../dist')
        }
    } : {
            entry: getFile(entry),
            output: {
                path: path.resolve(__dirname, '../dist'),
                filename: '[name].js'
            }
        }
}
module.exports = genratorOutput