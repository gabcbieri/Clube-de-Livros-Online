document.addEventListener("DOMContentLoaded", function () {
    // Carrega os empréstimos armazenados no LocalStorage ao carregar a página
    loadLoans();

    // Manipula o evento de envio do formulário de empréstimos
    document.getElementById("loanForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Captura os valores dos campos do formulário
        const memberName = document.getElementById("memberName").value;
        const bookTitle = document.getElementById("bookTitle").value;
        const returnDate = document.getElementById("returnDate").value;

        // Cria o objeto de empréstimo
        const loan = {
            memberName: memberName,
            bookTitle: bookTitle,
            returnDate: returnDate
        };

        // Recupera a lista de empréstimos do LocalStorage ou inicializa um array vazio
        const loanList = JSON.parse(localStorage.getItem("loans")) || [];
        const editIndex = document.getElementById("loanForm").dataset.editIndex;

        if (editIndex) {
            // Edita um empréstimo existente
            loanList[editIndex] = loan;
            delete document.getElementById("loanForm").dataset.editIndex;
        } else {
            // Adiciona um novo empréstimo
            loanList.push(loan);
        }

        // Salva os empréstimos atualizados no LocalStorage
        localStorage.setItem("loans", JSON.stringify(loanList));

        // Limpa o formulário
        document.getElementById("loanForm").reset();

        // Recarrega a lista de empréstimos na tabela
        loadLoans();
    });

    // Manipula os cliques na tabela de empréstimos (editar ou excluir)
    document.getElementById("loanList").addEventListener("click", function (event) {
        const index = event.target.getAttribute("data-index");

        if (event.target.classList.contains("delete-button")) {
            deleteLoan(index);
        } else if (event.target.classList.contains("edit-button")) {
            editLoan(index);
        }
    });
});

// Função para carregar a lista de empréstimos na tabela
function loadLoans() {
    const loanList = JSON.parse(localStorage.getItem("loans")) || [];
    const loanTable = document.getElementById("loanList");
    loanTable.innerHTML = "";

    loanList.forEach((loan, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${loan.memberName}</td>
            <td>${loan.bookTitle}</td>
            <td>${loan.returnDate}</td>
            <td>
                <div class="button-container">
                    <button class="edit-button" data-index="${index}">Editar</button>
                    <button class="delete-button" data-index="${index}">Excluir</button>
                </div>
            </td>
        `;
        loanTable.appendChild(newRow);
    });
}

// Função para excluir um empréstimo
function deleteLoan(index) {
    const loanList = JSON.parse(localStorage.getItem("loans")) || [];
    loanList.splice(index, 1);
    localStorage.setItem("loans", JSON.stringify(loanList));
    loadLoans();
}

// Função para editar um empréstimo
function editLoan(index) {
    const loanList = JSON.parse(localStorage.getItem("loans")) || [];
    const loanToEdit = loanList[index];

    // Preenche o formulário com os dados do empréstimo selecionado
    document.getElementById("memberName").value = loanToEdit.memberName;
    document.getElementById("bookTitle").value = loanToEdit.bookTitle;
    document.getElementById("returnDate").value = loanToEdit.returnDate;

    // Adiciona o índice do empréstimo como um atributo de dados no formulário
    document.getElementById("loanForm").setAttribute("data-edit-index", index);
}