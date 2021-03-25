function createTitle(title) {
  var bookIdea = "Storm's Awakening";
  return `The ${title}`;
};

var sushiTitle = "Dancing Sushi";
var dragonTitle = "Dragon in the Summer";
var ghostTitle = "Teenage Ghoul";

function buildMainCharacter(name, age, pronouns) {
  name = name;
  age = age;
  pronouns = pronouns;
}

var ghoulCharacter = {
  name: "Vassya",
  age: 16,
  pronouns: "she/her",
}

var bakerCharacter = {
  name: "Hannah",
  age: 30,
  pronouns: "she/her",
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
