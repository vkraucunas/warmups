// add scripts

console.log("sanity check!");


function intersection(arr1, arr2) {
    var result = [];

    for (var i = 0; i < arr1.length; i++) {
        for (var j=0; j< arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }


    return result.sort();
}