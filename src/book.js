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














// npm test test/book-test.js

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

///

















module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
