app.filter("noDash", function () {
    return function(input) {
        return input.split('-').join(' ');
    }
})

