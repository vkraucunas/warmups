//Create a function that takes a nested array and a callback as arguments and returns a single, flatted array. Make sure to handle errors as well.Use a module to handle the work, making sure to export the function. Then call the function in a different file, passing in the arguments (array, callback).


var flattenArray = require('./utility223');

var nestedArray = [
    [1,2,3],
    [4,5,6],
    [8,9,10]
    ];

var fix = function(nestedArray, callback) {
    flattenArray(nestedArray, function(err, data) {
        if (err) {
            return callback("something is stupid");
        } else {
            return callback(data);
        }
        callback(null, data);
    });
};


console.log(fix);


//var filter = function(dirName, extension, callback) {
//     fs.readdir(dirName, function(err, list) {
//         if (err) {
//             return callback(err);
//         } else {
//             var responseArray = list.filter(function(dirName) {
//                 return path.extname(dirName) === "." +extension;
//             });
//             callback(null, responseArray);
//         }
//     });
// };