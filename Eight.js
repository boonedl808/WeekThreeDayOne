var http = require('http');

http.get(process.argv[2], function(response) {
    var len = 0;
    var str = '';
    response.setEncoding("utf8");
    response.on("data", function(data) {
        len += data.length;
        str += data;
    });
    response.on("end", function(end) {
        console.log(len);
        console.log(str);
    });
    response.on("error", console.error);
});

// OFFICIAL:
//     var http = require('http')
//     var bl = require('bl')
    
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))  
//     })

