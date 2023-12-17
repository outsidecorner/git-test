const myBooks = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return  'Book title: ' + this.title + '\n' +
                'Author: ' + this.author + '\n' +
                'Pages: ' + this.pages + '\n' +
                'Read? ' + this.read ;
    }
}

function addBookToLibrary(Book, library) {
    library.push(Book);
}

theHobbit = new Book('Hobbit', 'Tolkien', 732, true);
theComingWave = new Book('The Coming Wave', 'Suleymani', 235, true);
theBible = new Book('Bible', 'God', 1325, true);

addBookToLibrary(theHobbit, myBooks);
addBookToLibrary(theComingWave, myBooks);
addBookToLibrary(theBible, myBooks);

console.log(myBooks);

function renderBooksFromLibrary() {
    const container = document.querySelector('#thisTable');
        
        var i = 1;
        for (const book of myBooks) {
            let newBookRow = document.createElement('tr');
            console.log(book.title);
            newBookRow.setAttribute('id', 'dataRow' + i);
            if(i % 2 == 1){
                newBookRow.setAttribute('style', 'background-color: white;');}

                let newBookData = document.createElement('td');
                newBookData.setAttribute('id', 'Title');
                newBookData.textContent = book.title;
                newBookRow.appendChild(newBookData);
                
                newBookData = document.createElement('td');
                newBookData.setAttribute('id', 'Author');
                newBookData.textContent = book.author;
                newBookRow.appendChild(newBookData);

                newBookData = document.createElement('td');
                newBookData.setAttribute('id', 'Pages');
                newBookData.textContent = book.pages;
                newBookRow.appendChild(newBookData);

                newBookData = document.createElement('td');
                newBookData.setAttribute('id', 'Read');
                newBookData.textContent = book.read;
                newBookRow.appendChild(newBookData);
            
            container.appendChild(newBookRow);
            i++;
        }
    }

const btnList = document.querySelector('#btn-list');
btnList.addEventListener('click', () => {
    renderBooksFromLibrary();
  });

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
        )
    addBookToLibrary(newBook, myBooks);
});