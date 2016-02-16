function isEven (str) {
    str = str.split('');
    var exes = [];
    var ohs = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            exes.push(str[i]);
        } else {
            ohs.push(str[i]);
        }
    }

    return (exes.length === ohs.length);
}

console.log(isEven("xoxoooooxoxxo"));
console.log(isEven("xoxoxoxo"));



function isEven2 (str) {
    str = str.split('');
    var exes = [];
    var ohs = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            exes.push(str[i]);
        } else {
            ohs.push(str[i]);
        }
    }
    return (exes.length%2 === 0 && ohs.length%2 === 0)
}

console.log(isEven2("xoxooooooxoxxo"));
console.log(isEven2("xoxoxoxo"));

