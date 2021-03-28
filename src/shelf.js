function shelfBook(book, shelf) {
  var shelfSize = 3;
  if (shelf.length < shelfSize) {
    shelf.unshift(book);
  }
}

////////

/////UNSHELF BOOK!!!!!!!!

//////////

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
}

///////////

//////list titles!!!!!!

/////////

function listTitles(shelf) {
  var titleList = ""
	for (var i = 0; i < 1; i++) {
    titleList = shelf[i].title
  }
  for (var i = 1; i < shelf.length; i++) {
    titleList = titleList + ", " + shelf[i].title
  }
  return titleList
}






// npm test test/shelf-test.js



function searchShelf() {
}







module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
