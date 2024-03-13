// Variável para armazenar o ID do jogo atualmente alugado
let jogoAlugadoId = null;

// Função para alterar o status do jogo (alugar ou devolver)
function alterarStatus(id) {
    // Seleciona o elemento do jogo clicado com base no ID
    let gameClicado = document.getElementById(`game-${id}`);
    // Seleciona a imagem e o botão dentro do elemento do jogo clicado
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
   
    // Verifica se a imagem do jogo clicado possui a classe indicando que está alugada
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Se estiver alugado
        if (jogoAlugadoId === id) {
            // Se o ID do jogo clicado for o mesmo do jogo atualmente alugado, permite a devolução
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogoAlugadoId = null; // Define que nenhum jogo está alugado
        } else {
            // Se o ID do jogo clicado for diferente do jogo atualmente alugado, mostra um alerta
            alert("Você já alugou outro jogo. Por favor, devolva-o antes de alugar este.");
        }
    } else {
        // Se não estiver alugado
        if (jogoAlugadoId === null) {
            // Se nenhum jogo estiver alugado, permite o aluguel do jogo clicado
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogoAlugadoId = id; // Define o ID do jogo clicado como o jogo alugado atualmente
        } else {
            // Se já houver um jogo alugado, mostra um alerta
            alert("Você já alugou um jogo. Não é possível alugar mais de um jogo por vez.");
        }
    }
}
