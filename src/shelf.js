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

















function searchShelf(shelf, title) {
  var isOnShelf = true
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      isOnShelf = true
    }
    else {
      isOnSelf = false
    }
  }
  return isOnShelf
}

////////////

function searchShelf(shelf, book) {
  var isOnShelf = false
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      isOnShelf = true
    }
  }
  return isOnShelf
}






// npm test test/shelf-test.js







module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
