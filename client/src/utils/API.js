import axios from "axios";

export default {
  searchBooks: function(title) {
    return axios.get("/api/books/search", {
      params: {
        title
      }
    }).then(res => {
      console.log(res.data)
      return res.data
    })
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
