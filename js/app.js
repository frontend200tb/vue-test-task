var app = new Vue({
  el: "#app",
  data: {
    pageClass: 'bg-green-900 font-sans min-h-screen',
    containerClass: 'bg-green-100 container flex flex-col justify-between min-h-screen mx-auto',
    headerClass: 'bg-green-800 text-2xl text-center text-green-100 rounded-xl m-4 p-4',
    searchClass: 'bg-green-400 rounded-xl m-4 p-4',
    inputClass: 'bg-green-100 text-green-900 rounded-xl border-green-800 border-2 m-4 p-4',
    btnClass: 'rounded-xl text-green-100 bg-green-800 m-4 p-4 transition duration-700 ease-in-out transform hover:scale-110',
    loadBooks: 'Загрузить',
    removeBooks: 'Очистить',
    sortClass: 'bg-green-400 rounded-xl m-4 p-4',
    results: 'bg-green-200 rounded-xl m-4 p-4',
    tableClass: 'border-separate w-full',
    thClass: 'p-4',
    trClass: 'p-4',
    tdClass: 'text-xl p-4',
    footerClass: 'bg-green-800 text-2xl text-center text-green-100 rounded-xl m-4 p-4',
    aClass: 'hover:text-red-400',
    message: "vuejs",
    result: null,
    books: null,
  },
  methods: {
    getBooks() {
      query = this.message.split(' ').join('+');
      console.log(query);
      queryLink = `https://openlibrary.org/search.json?q=${query}`
      window.axios
        .get(queryLink)
        .then((response) => {
          // handle success
          console.log(response.data.docs);
          this.books = response.data.docs;
        })
        .catch((error) => {
          // handle error
          console.log(error);
      });
    },
    coverLink(isbn) {
      if (!isbn) return 0;
      return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
    }, 
    downloadXlsx() {
      console.log('вошли в функцию')
      var wb = XLSX.utils.table_to_book(document.getElementById('TableToExport'));
      XLSX.writeFile(wb, "SheetJSTable.xlsx");
    },
    sortAZ() {
      console.log('sort A-Z');
      this.books.sort(function(a, b){
        var nameA = a.title.toLowerCase();
        var nameB = b.title.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        if (nameA = nameB) return 0;
      });
    },
    sortZA() {
      console.log('sort Z-A');
      this.books.sort(function(a, b){
        var nameA = a.title.toLowerCase();
        var nameB = b.title.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        if (nameA = nameB) return 0;
      });
    },
    getAuthors(value) {
      return value.join(',');
    },
  },
  computed: {
    getTableTitle() {
      return `Результат поиска по "${this.message}"`;
    },
    getBooksNumber() {
      return `Общее число книг ${this.books.length}`;
    },
  }

});