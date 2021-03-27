function createLibrary(name, shelves) {
  name = name;
  shelves = {
    fantasy: fantasy,
    fiction: fiction,
    nonFiction: nonFiction,
  }
  console.log(name, shelves)
}





// npm test test/library-test.js

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
