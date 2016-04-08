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

function isEven3(str) {
    var exes = 0;
    var ohs = 0;

    str.split('').map(function(el) {
        if (el === 'x') {
            exes += 1;
        } else {
            ohs += 1;
        }
    });
    return (!(exes%2) && !(ohs%2));
};

console.log(isEven3("xoxooooooxoxxo"));
console.log(isEven3("xoxoxoxo"));





