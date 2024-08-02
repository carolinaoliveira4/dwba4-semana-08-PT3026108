// Função para mostrar o alerta da Questão 1
function mostrarAlertaQuestao1() {
    alert("Alerta: Questão 01");
}

// Função para mostrar os dados dos alunos da Questão 2
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 6, 9.0),
    new Aluno("Carlos", "Pereira", 5, 7.5),
    new Aluno("Ana", "Costa", 8, 6.0),
    new Aluno("Pedro", "Santos", 4, 5.5)
];

function mostrarDadosQuestao2() {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}

// Função para mostrar os dados dos alunos da Questão 3
function mostrarDadosQuestao3() {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}

// Função para mostrar os dados dos alunos da Questão 4
function mostrarDadosQuestao4() {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}

// Função para gerenciar a visualização com base na seleção do usuário
function exibirQuestao(questao) {
    switch (questao) {
        case 'questao1':
            mostrarAlertaQuestao1();
            break;
        case 'questao2':
            mostrarDadosQuestao2();
            break;
        case 'questao3':
            mostrarDadosQuestao3();
            break;
        case 'questao4':
            mostrarDadosQuestao4();
            break;
        default:
            alert('Questão inválida.');
    }
}