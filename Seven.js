var http = require('http')

  http.get(process.argv[2], function (request) {
    request.setEncoding('utf8')
    request.on('data', console.log)
    request.on('error', console.error)
  })
  
  // OFFICIAL:
    //  var http = require('http')
    
    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // })