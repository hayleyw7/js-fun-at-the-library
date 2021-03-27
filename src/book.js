function createTitle(bookTitle) {
  var bookIdea = "Storm's Awakening";
  return `The ${bookTitle}`;
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

function saveReview(newReview, reviews) {
  if (!reviews.includes(newReview)) {
    reviews.push(newReview)
  }
}

function calculatePageCount(bookTitle) {
  var newPageCount = bookTitle.length * 20;
  return newPageCount;
}





/////////////////

////WRITEBOOK!!!!!!!

/////////////////

function writeBook(bookTitle,) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: pageCount,
    genre: genre,
  }
  return book
}





// npm test test/book-test.js















/////////

//////EDIT BOOK!!!!!!!

////////////

function editBook(oldPages, newPages) {
  var pageCount = pages / 3
}














// npm test test/book-test.js

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
