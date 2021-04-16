const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}

const questions = [
    {/*41*/ 
        question: 'No ciclo da vida incremental, o escopo do projeto é geralmente determinado no inicio, mas as estimativas de custo e de tempo sao rotineiramente modificadas s pela equipe à medida que o entendimento do produto final do projeto aumenta',
        answers: [
            { text: 'Certo', correct: false },
            { text: 'Errado', correct: true },
          
        ]

    },
    {/*42*/ 
        question: 'O registro de lições aprendidas é uma saída do processo gerenciamento do conhecimento do projeto e pode incluir recomendações e ações propostas para cada situação registrada.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*43*/ 
        question: 'O controle de acesso à informação tem por objetivo garantir que os acessos físicos e lógicos aos recursos para manuseio da informação sejam franqueados a pessoas autorizadas, com base em sua posição funcional hierárquica na organização.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*44*/ 
        question: 'De acordo com a norma ISO 27002, é conveniente que, na política de segurança da informação, seja incluída atribuição de responsabilidades, gerais e específicas, para o gerenciamento da segurança da informação.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*45*/ 
        question: 'De acordo com a norma ISO 27001, a classificação da informação tem por objetivo oferecer à informação o mais alto nível de proteção disponível, considerando o seu valor, a fonte da informação e o público-alvo.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*46*/ 
        question: '6 A análise de vulnerabilidades considera potenciais vulnerabilidades ocasionadas por falhas humanas e por erros de configuração.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*47*/ 
        question: 'Como medida necessária para viabilizar a operação alternativa dos negócios da organização em caso de indisponibilidade dos recursos originais, o plano de continuidade de negócios estabelece que esses recursos sejam sistematicamente mantidos em duplicidade.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*48*/ 
        question: 'No âmbito do tratamento de incidentes, um CSIRT (computer security incident response team) tem o papel de atuar na prevenção contra eventos de incidentes futuros',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*49*/ 
        question: 'Uma auditoria no plano de continuidade de negócios de uma organização precisa verificar se o plano é exequível e se o pessoal está treinado para executá-lo.',
        answers: [
            { text: 'Errado', correct: false  },
            { text: 'Certo', correct: true }
            
           
        ]

    },
    {/*50*/ 
        question: 'Uma das recomendações do ITIL é que as organizações ajustem seu contexto às boas práticas ITIL, adotando-as, de modo a viabilizar transparentemente a estrutura de gerenciamento de serviços padronizada.',
        answers: [
            { text: 'Certo', correct: false },
            { text: 'Errado', correct: true }
           
        ]

    },
    {/*51*/ 
        question: 'De acordo com o COBIT 5, serviços, aplicações e infraestrutura são os instrumentos pelos quais as decisões de governança são institucionalizadas dentro da empresa e promovem a interação entre as decisões de governança e o gerenciamento',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },

  
];
/*const random = Math.floor(Math.random() * questions.length);
console.log(random, questions[random]);*/