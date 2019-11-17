var path = require('path');

const config={
        mode:"development",
        modeway:'many',
        entry:'./src',
        output:path.resolve(__dirname,'./dist')
}
module.exports=config