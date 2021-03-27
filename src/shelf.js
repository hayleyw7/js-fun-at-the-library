// function shelfBook(book, SciFiShelf) {
//   if (book[3] === "sciFi") {
//     sciFiShelf.push
//     //// pop? shift? unshift?
//   }
// }

function shelfBook(book, shelf) {
  shelf.pop(book)
}
















////////

/////UNSHELF BOOK!!!!!!!!

//////////

///what i have so far (NOT WORKING)
// function unshelfBook(book, shelf) {
//   shelf.unshift(book)

///// add a loop????
/////  maybe if else inside of a loop???
//// splice instead of unshift? slice???

// }


///// from slack (another person)

// function unshelfBook(book, shelf) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (book.title === shelf[i].title) {
//       var removedBook = shelf.splice(i, 1);
//     }
//   }
















////doesn't work

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    console.log(shelf[i].title);
    // if (shelf.includes(title);
    //   return shelf

    /////add if else
    //// and add parameters in that expression
  }
}

////ideas from helper but not working anyway

// for (var i = 0; i < shelf.length; i++) {
//   if(book.title === shelf[i].title) {
//     var removedBook = shelf.splice(i, 1);
//   }
// }


/////idea from slack

// function unshelfBook(book, shelf) {
//   for (var i = 0; i < shelf.length; i++) {
//     if (book.title === shelf[i].title) {
//       var removedBook = shelf.splice(i, 1);
//     }
//   }



///////////

//////list titles!!!!!!

/////////

function listTitles(shelf) {
  console.log(listTitles)
}

function searchShelf() {
}





// npm test test/shelf-test.js

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
