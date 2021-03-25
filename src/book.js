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

/////////

//doesn't WORK

// function saveReview(content, reviews) {
//   // reviews.push(content);
//   for (var i = 0; i < 10; i++) {
//     if
//       (reviews === false) {
//         reviews.push(content);
//       } else {
//     		return reviews
//       }
//   }
// }

function saveReview(content, reviews) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    let el = reviews[index];
    if (result.indexOf(el) === -1) reviews.push(content);
    }
  }

  //merge these two together somehow i think???

//   for (var i = 0; i < 10; i++) {
//     if
//       (reviews === false) {
//         reviews.push(content);
//       } else {
//     		return reviews
//       }
//   }
// }



///if new incoming review matches
//existing one in array, return and not do anything

// npm test test/book-test.js
















module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
