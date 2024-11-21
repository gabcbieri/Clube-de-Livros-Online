 // Gráfico de Evolução dos Membros
 var ctxMembros = document.getElementById('graficoMembros').getContext('2d');
 new Chart(ctxMembros, {
     type: 'line',
     data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
         datasets: [{
             label: 'Novos Membros',
             data: [25, 18, 30, 28, 23, 15],
             backgroundColor: 'rgba(75, 192, 192, 0.2)',
             borderColor: 'rgba(75, 192, 192, 1)',
             borderWidth: 2
         }]
     }
 });

 // Gráfico de Livros Lidos
 var ctxLivrosLidos = document.getElementById('graficoLivrosLidos').getContext('2d');
 new Chart(ctxLivrosLidos, {
     type: 'line',
     data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
         datasets: [{
             label: 'Livros Lidos',
             data: [27, 16, 19, 21, 18, 20],
             backgroundColor: 'rgba(153, 102, 255, 0.2)',
             borderColor: 'rgba(153, 102, 255, 1)',
             borderWidth: 2
         }]
     }
 });

 // Gráficos dos Livros Mais Lidos
 var ctxLivroA = document.getElementById('graficoLivroA').getContext('2d');
 new Chart(ctxLivroA, {
     type: 'bar',
     data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
         datasets: [{
             label: 'O Livro Vermelho',
             data: [4, 5, 6, 8, 3, 7],
             backgroundColor: 'rgba(255, 159, 64, 0.6)',
             borderColor: 'rgba(255, 159, 64, 1)',
             borderWidth: 1
         }]
     }
 });

 var ctxLivroB = document.getElementById('graficoLivroB').getContext('2d');
 new Chart(ctxLivroB, {
     type: 'bar',
     data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
         datasets: [{
             label: 'Dom Quixote',
             data: [7, 3, 9, 6, 5, 8],
             backgroundColor: 'rgba(54, 162, 235, 0.6)',
             borderColor: 'rgba(54, 162, 235, 1)',
             borderWidth: 1
         }]
     }
 });

 var ctxLivroC = document.getElementById('graficoLivroC').getContext('2d');
 new Chart(ctxLivroC, {
     type: 'bar',
     data: {
         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
         datasets: [{
             label: 'Senhor Dos Anéis',
             data: [6, 8, 4, 7, 10, 5],
             backgroundColor: 'rgba(255, 99, 132, 0.6)',
             borderColor: 'rgba(255, 99, 132, 1)',
             borderWidth: 1
         }]
     }
 });

 // Gráfico de Participação dos Membros
 var ctxParticipacaoMembros = document.getElementById('graficoParticipacaoMembros').getContext('2d');
 new Chart(ctxParticipacaoMembros, {
     type: 'bar',
     data: {
         labels: ['João', 'Beatriz', 'Carlos', 'Ana', 'Fernanda'],
         datasets: [
             {
                 label: 'Leituras Completas',
                 data: [10, 15, 8, 12, 7],
                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
                 borderColor: 'rgba(75, 192, 192, 1)',
                 borderWidth: 1
             },
             {
                 label: 'Discussões Realizadas',
                 data: [6, 3, 3, 5, 4],
                 backgroundColor: 'rgba(255, 99, 132, 0.6)',
                 borderColor: 'rgba(255, 99, 132, 1)',
                 borderWidth: 1
             }
         ]
     },
     options: {
         responsive: true,
         scales: {
             y: {
                 beginAtZero: true,
                 title: {
                     display: true,
                     text: 'Número de Atividades'
                 }
             }
         }
     }
 });