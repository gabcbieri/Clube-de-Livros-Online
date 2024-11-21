// Modal 
const btnLogin = document.getElementById('btnLogin');
const btnFechar = document.getElementById('btnFechar');
const login = document.getElementById('login'); // Referência ao modal

btnLogin.onclick = function() {
    login.showModal();
}

btnFechar.onclick = function() {
    login.close();
}

// Login
const formLogin = login.querySelector('form'); // Pegue o formulário do modal

// Criando usuários para teste
let dadosUsuarios = [
    { nome: "user", email: "email@email.com", senha: "123" },
    { nome: "aluno", email: "aluno@email.com", senha: "aluno123" },
    { nome: "root", email: "root@email.com", senha: "root" },
];

formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let msgErro = login.querySelector('.erro');
    if (msgErro) {
        login.removeChild(msgErro);
    }

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let usuarioEncontrado = false; // Flag para verificar se o usuário foi encontrado

    dadosUsuarios.forEach(usuario => {
        if (email === usuario.email && senha === usuario.senha) {
            sessionStorage.setItem('usuarioLogado', "true");
            sessionStorage.setItem('nomeUsuario', usuario.nome);
            usuarioEncontrado = true; // O usuário foi encontrado
            window.location.href = "./index2.html";
        }
    });

    if (!usuarioEncontrado) {
        let erro = document.createElement('p');
        erro.classList.add('erro');
        erro.innerText = "Login ou senha errados";
        login.insertBefore(erro, login.firstChild);

        document.querySelector('#login form').reset();
    }
});
