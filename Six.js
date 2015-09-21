var mymodule = require('./sixModule.js')

var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function(err, list) {
  if (err) {
   throw err;
  }
  else list.forEach(function (file) {
   console.log(file);
  })
});

// OFFICIAL:
//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })