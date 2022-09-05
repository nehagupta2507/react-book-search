import axios from "axios";

export default {
  //get all book data with search input
  searchBooks: function (input) {
    console.log("Api searchbooks is called");
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + input);
  },
  //get the book data with id#
  searchOneBook: function (id) {
    console.log("Api searchOnebook is called");
    return axios.get("https://www.googleapis.com/books/v1/volumes/" + id);
  },
  //save the book data
  saveBook: function (bookData) {
    console.log("Api saveBook is called");
    return axios.post("/api/books", bookData);
  },
  //check if the book is already saved
  findSavedBook: function (id) {
    console.log("Api findSavedBook- already exist is called");
    return axios.get("/api/books/" + id);
  },
  //get all saved books from db
  getSavedBooks: function () {
    console.log("Api getSavedBooks- already exist is called");
    return axios.get("/api/books/");
  },
  deleteBook: function (id) {
    console.log("Api deleteBook- already exist is called");
    return axios.delete("/api/books/" + id)
  }
};