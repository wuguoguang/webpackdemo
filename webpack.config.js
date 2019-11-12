const path =require('path')
const generatorOutputEntry =require('./webpackConfig')

module.exports = {
        ...generatorOutputEntry({
            mode:'many',
            entry:'./src'
        })

  };