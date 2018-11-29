let http = require('http');
let util = require('util')
    //调用第三方接口
http.get('https://www.imooc.com/lecturer/ajaxrecteacher', function(res) {
    let data = '';
    res.on("data", function(chunk) {
        data += chunk;
    })
    res.on("end", function() {
        let result = JSON.parse(data);

        console.log("result:" + util.inspect(result))
    })
})