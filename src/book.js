function createTitle(title) {
  var bookIdea = "Storm's Awakening";
  return `The ${title}`;
};

var sushiTitle = "Dancing Sushi";
var dragonTitle = "Dragon in the Summer";
var ghostTitle = "Teenage Ghoul";

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character
}

///////////////////////



















function saveReview(a) {
  var reviews = [];
	reviews.push(a);
}

saveReview("An astounding success")



























module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
