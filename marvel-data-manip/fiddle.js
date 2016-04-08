var characters = require('./data/characters.json');
var mystique = require('./data/mystique.json').data.results;
var series = require('./data/series.json');

var theCharacters = characters.data.results;

// var allNames = theCharacters.forEach(function(el) {
//     console.log(el.name);
// });

// var charObj = theCharacters.reduce(function(acc, curr) {
//     acc[curr.name] = curr.id;
//     return acc;
// }, {})

// console.log(charObj);

// var descriptObj = theCharacters.reduce(function(acc, curr) {
//     acc[curr.name] = curr.description;
//     return acc;
// }, {});

// console.log(descriptObj);


var Adam = theCharacters.filter(function(el) {
    return el.name === 'Adam Warlock';
})[0].comics.items.map(function(comic) {
    return comic.name;
});

console.log(Adam);

// var stories = mystique.stories.items.filter(function(el) {
//     if (el.type === 'cover') {

//     }
// })