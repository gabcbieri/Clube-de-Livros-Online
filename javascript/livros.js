document.addEventListener("DOMContentLoaded", function () {
    loadBooks();

    document.getElementById("bookForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const genre = document.getElementById("genre").value;

        const book = {
            title: title,
            author: author,
            genre: genre
        };

        const bookList = JSON.parse(localStorage.getItem("books")) || [];
        const editIndex = document.getElementById("bookForm").dataset.editIndex;

        if (editIndex) {
            // Editar livro existente
            bookList[editIndex] = book;
            delete document.getElementById("bookForm").dataset.editIndex;
        } else {
            // Adicionar novo livro
            bookList.push(book);
        }

        localStorage.setItem("books", JSON.stringify(bookList));
        document.getElementById("bookForm").reset();
        loadBooks();
    });

    document.getElementById("bookList").addEventListener("click", function (event) {
        const index = event.target.getAttribute("data-index");
        
        if (event.target.classList.contains("delete-button")) {
            deleteBook(index);
        } else if (event.target.classList.contains("edit-button")) {
            editBook(index);
        }
    });
});

function loadBooks() {
    const bookList = JSON.parse(localStorage.getItem("books")) || [];
    const bookTable = document.getElementById("bookList");
    bookTable.innerHTML = "";

    bookList.forEach((book, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>
                <div class="button-container">
                    <button class="edit-button" data-index="${index}">Editar</button>
                    <button class="delete-button" data-index="${index}">Excluir</button>
                </div>
            </td>
        `;
        bookTable.appendChild(newRow);
    });
}

function deleteBook(index) {
    const bookList = JSON.parse(localStorage.getItem("books")) || [];
    bookList.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookList));
    loadBooks();
}

function editBook(index) {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const bookToEdit = books[index];

    document.getElementById("title").value = bookToEdit.title;
    document.getElementById("author").value = bookToEdit.author;
    document.getElementById("genre").value = bookToEdit.genre;

    document.getElementById("bookForm").setAttribute("data-edit-index", index);
}