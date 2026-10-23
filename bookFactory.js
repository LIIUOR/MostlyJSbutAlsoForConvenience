function createBook(title,author,year){
    return {
        title: title,
        author: author,
        year: year,

        getInfo() {
            return `${this.title} - ${this.author}, ${this.year}`;
        }
  };
}
module.exports= createBook;