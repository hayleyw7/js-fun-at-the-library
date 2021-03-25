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

//WORKS BUT ADDING NEXT ONE NOW & IT'S HARD

// function saveReview(content, reviews) {
//   reviews.push(content);
// }

// {
//     x.splice(found,1);
// }
// else{
//     x.push(new Item(clickId, obj)); //push json object
// }

function saveReview(content, reviews) {
  if
    (reviews.includes(value) === false) {
      reviews.push();
  } else {
		return reviews
  }
}

// npm test test/book-test.js

















module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
