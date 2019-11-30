const getTheTitles = function(booksArray) {
    const bookTitles = booksArray.map((book) => {
        return book.title;
    });
    return bookTitles;
}

module.exports = getTheTitles;
