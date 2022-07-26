var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue123!",
    books: null
  },
  mounted() {
    window.axios
      .get("https://openlibrary.org/search.json?q=mr+fox")
      .then((response) => {
        // handle success
        console.log(response.data.docs);
        this.books = response.data.docs;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
});