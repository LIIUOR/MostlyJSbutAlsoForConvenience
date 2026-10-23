const { assert,expect }=require("chai")
const createBook = require("../bookFactory.js");
const createCounter=require("../Counter.js");
const book={
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,

    getInfo(){
        return `${this.title} - ${this.author}, ${this.year}`;
    }
};
describe('Тесты1',()=>{
    it('123',()=>{
        assert.equal('Привет','Привет')
    })
    it('Проверка title',()=>{
        assert.equal(book.title,'Война и мир')
    })
    it('Проверка author',()=>{
        assert.equal(book.author,'Лев Толстой')
    })
    it('Проверка year',()=>{
        assert.equal(book.year,1869)
    })
    it('Проверка метода getInfo',()=>{
        assert.equal(book.getInfo(),'Война и мир - Лев Толстой, 1869')
    })
    it('Проверка типа свойства year', ()=>{
        expect(book.year).to.be.a('number')
    })
})
describe('Тесты2',()=>{
    it('Проверка фабричной ф-ии',()=>{
        const Book=createBook('1984','Джордж Оруэлл',1949)
        expect(Book.title).to.equal('1984');
        assert.equal(Book.author,'Джордж Оруэлл');
        expect(Book.year).to.equal(1949)
    })
    it('Проверка getInfo',()=>{
        const Book = createBook('Преступление и наказание', 'Фёдор Достоевский', 1866);
        expect(Book.getInfo()).to.equal('Преступление и наказание - Фёдор Достоевский, 1866')
    })
    it('Проверка 2-х вызовов',()=>{
        const book1=createBook('Гарри Поттер','Дж. К. Роулинг',1997)
        const book2=createBook('Хоббит','Дж. Р. Р. Толкин',1937)
        expect(book1).to.not.equal(book2)
        expect(book1.title).to.not.equal(book2.title)
        expect(book1.author).to.not.equal(book2.author)
    })
    it('Проверка на создание',()=>{
        const result=createBook('Преступление и наказание','Федор Достоевский',1866)
        expect(result).to.be.an('object')
    })
})
describe('Тесты3',()=>{
    it('Проверка на null',()=>{
        const counter=createCounter();
        expect(counter.getValue()).to.equal(0)
    })
    it('Проверка increment',()=>{
        const counter=createCounter();
        counter.increment();
        expect(counter.getValue()).to.equal(1);
    })
    it('Проверка 3-х increment',()=>{
        const counter=createCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        expect(counter.getValue()).to.equal(3);
    })
    it('Проверка increment and decrement',()=>{
        const counter=createCounter();
        counter.increment();
        counter.decrement()
        expect(counter.getValue()).to.equal(0);
    })
    it('Проверка reset',()=>{
        const counter=createCounter();
        counter.increment();
        counter.increment();
        counter.decrement();
        counter.reset();
        expect(counter.getValue()).to.equal(0);
    })
    it('Проверка decrement',()=>{
        const counter=createCounter();
        counter.decrement();
        expect(counter.getValue()).to.equal(-1);
    })
})