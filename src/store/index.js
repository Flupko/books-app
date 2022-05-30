import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("counter", {
  state: () => ({ searchResults: null, favoriteBooks: [] }),
  actions: {
    async searchBook(booktitle) {
      const options = {
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?",
        params: {
          q: booktitle,
          key: "AIzaSyBTocZyXYjK4xWBu4U4L-awjKHc79Lselo",
          maxResults: "30",
        },
      };

      await axios
        .request(options)
        .then((response) => {
          this.searchResults = response.data.items;
          console.log(response.data.items);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getBookById(id) {
      let data = null;
      await axios
        .get("https://www.googleapis.com/books/v1/volumes/" + id)
        .then((response) => {
          console.log(response.data);
          data = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
      return data;
    },
    addFavoriteBook(book) {
      this.favoriteBooks.push(book);
      console.log("Test");
      console.log(this.favoriteBooks);
    },
    removeFavoriteBook(book) {
      const index = this.favoriteBooks.indexOf(book);
      this.favoriteBooks.splice(index, 1);
      console.log("Test");
    },
    checkBookPresence(bookId) {
      let presence = false;
      this.favoriteBooks.forEach((elm) => {
        elm.id === bookId ? (presence = true) : null;
      });
      return presence;
    },
  },
});
