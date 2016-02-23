function flatten(arr) {
  return arr.reduce(function (row, toFlatten) {
    return row.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

var test = flatten([
    [1,2,3],
    [4,5,6],
    [8,9,10]
    ]);

console.log(test);


module.export = flatten;





//Mike solution
// warmup223.js
var sum = require('./utility');

var result = sum([1,3], function(err, data) {
    if (err) {
        return err;
    } else {
        return data;
    }
});


console.log(result);


///utility.js
function sum(arr, callback) {
    if (!Array.isArray(arr)) {
        return callback("dumb ass");
    } else {
        var results = arr.forEach(function(num) {
            return num + num;
        });
        return callback(null, results);
    }
}

module.exports = sum;


