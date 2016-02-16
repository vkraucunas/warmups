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

    if (exes.length === ohs.length) {
        return true;
    } else {
        return false;
    }
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

    if (exes.length%2 === 0 && ohs.length%2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven2("xoxooooooxoxxo"));
console.log(isEven2("xoxoxoxo"));

