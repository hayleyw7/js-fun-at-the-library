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

function saveReview(newReview, reviews) {
  if (!reviews.includes(newReview)) {
    reviews.push(newReview)
  }
}
















function calculatePageCount(pages) {
  var pages = pages;
  pages.push(pages.length + 20)
	var fullTitle =
		// function test() {
		// 	createTitle.createTitle().length
		// }
	console.log(fullTitle)
}

//not working

// function calculatePageCount(bookPageCount, increasedPages) {
//   var bookPageCount = bookPageCount;
//   var pages = pages;
//   pages.push(pages.length + 20);
//   var fullTitle = pages;
//     // function test() {
//     // 	createTitle.createTitle().length
//     // }
//   console.log(fullTitle)

///not working

// function calculatePageCount(pages) {
//   var pages = pages;
//   pages.push(pages + createTitle.bookIdea.length)
// 	return pages
// }








/////////////////

////WRITEBOOK!!!!!!!

/////////////////

// function writeBook(book) {
//   var book = {
//     bookTitle: bookTitle,
//     bookCharacter: bookCharacter,
//     writeBook: writeBook;
//   }
// }

var writeBook = writeBook




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
