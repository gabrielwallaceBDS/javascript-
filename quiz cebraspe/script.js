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
    {/*41 ERRADO*/ 
        question: 'No ciclo da vida incremental, o escopo do projeto é geralmente determinado no inicio, mas as estimativas de custo e de tempo sao rotineiramente modificadas s pela equipe à medida que o entendimento do produto final do projeto aumenta',
        answers: [
            { text: 'Certo', correct: false },
            { text: 'Errado', correct: true },
          
        ]

    },
    {/*42 CERTO*/ 
        question: 'O registro de lições aprendidas é uma saída do processo gerenciamento do conhecimento do projeto e pode incluir recomendações e ações propostas para cada situação registrada.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*43 ERRADO*/ 
        question: 'O controle de acesso à informação tem por objetivo garantir que os acessos físicos e lógicos aos recursos para manuseio da informação sejam franqueados a pessoas autorizadas, com base em sua posição funcional hierárquica na organização.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*44 CERTO*/ 
        question: 'De acordo com a norma ISO 27002, é conveniente que, na política de segurança da informação, seja incluída atribuição de responsabilidades, gerais e específicas, para o gerenciamento da segurança da informação.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*45 ERRADO*/ 
        question: 'De acordo com a norma ISO 27001, a classificação da informação tem por objetivo oferecer à informação o mais alto nível de proteção disponível, considerando o seu valor, a fonte da informação e o público-alvo.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*46 CERTO*/ 
        question: '6 A análise de vulnerabilidades considera potenciais vulnerabilidades ocasionadas por falhas humanas e por erros de configuração.',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*47 ERRADO*/ 
        question: 'Como medida necessária para viabilizar a operação alternativa dos negócios da organização em caso de indisponibilidade dos recursos originais, o plano de continuidade de negócios estabelece que esses recursos sejam sistematicamente mantidos em duplicidade.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*48 CERTO*/ 
        question: 'No âmbito do tratamento de incidentes, um CSIRT (computer security incident response team) tem o papel de atuar na prevenção contra eventos de incidentes futuros',
        answers: [
            { text: 'Certo', correct: true },
            { text: 'Errado', correct: false }
           
        ]

    },
    {/*49 ERRADO*/ 
        question: 'Uma auditoria no plano de continuidade de negócios de uma organização precisa verificar se o plano é exequível e se o pessoal está treinado para executá-lo.',
        answers: [
            { text: 'Errado', correct: false  },
            { text: 'Certo', correct: true }
            
           
        ]

    },
    {/*50 CERTO*/ 
        question: 'Uma das recomendações do ITIL é que as organizações ajustem seu contexto às boas práticas ITIL, adotando-as, de modo a viabilizar transparentemente a estrutura de gerenciamento de serviços padronizada.',
        answers: [
            { text: 'Certo', correct: false },
            { text: 'Errado', correct: true }
           
        ]

    },
    {/*51 */ 
        question: 'De acordo com o COBIT 5, serviços, aplicações e infraestrutura são os instrumentos pelos quais as decisões de governança são institucionalizadas dentro da empresa e promovem a interação entre as decisões de governança e o gerenciamento',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
            
           
        ]

    },
    {/*52 CERTO*/ 
        question: 'De acordo com a Resolução CGPAR n.o 11/2016, as entidades responsáveis por verificar a observância dos termos da própria resolução pelas empresas estatais federais são as áreas de auditoria interna de cada uma delas e os órgãos de controle efiscalização da administração federal.',
        answers: [
            { text: 'Errado', correct: false },
            { text: 'Certo', correct: true }
                
               
        ]
    
    },
    {/*53 ERRADO*/ 
        question: 'Do ponto de vista do cliente, o CRM (customer relationship management) precisa oferecer customização, simplicidade e conveniência para a realização de transações com a organização, independentemente do canal escolhido para a interação',
        answers: [
        { text: 'Certo', correct: false },
        { text: 'Errado', correct: true }
               
        ]
    
    },
      {/*54 ERRADO*/ 
        question: 'Requisitos externos são derivados de metas, políticas e procedimentos das organizações, do cliente e do desenvolvedor e incluem requisitos de processo, requisitos de implementação, restrições de entrega e restrições orçamentárias.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*55 CERTO*/ 
        question: 'Na especificação de requisitos, são estabelecidos uma escala de medição e os valores aceitáveis para cada requisito de, tornando-o mensurável, ou seja, adicionando a ele um critério de aceitação.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*56 ERRADO*/ 
        question: 'Protótipo consiste de um cenário de diálogo entre o usuário final e o sistema, sendo montado para que o usuário simule sua interação com o sistema e indique ao analista de que informações ele efetivamente necessita para realizar a tarefa projetada no protótipo',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*57 CERTO*/ 
        question: 'O modelo de ciclo de vida em cascata tem como características o estabelecimento, no início do projeto, de requisitos de maneira completa, correta e clara, e a possibilidade de disponibilização de várias versões operacionais do software antes da conclusão do projeto.',
        answers: [
        { text: 'Certo', correct:  true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*58 ERRADO*/ 
        question: 'Nas metodologias de desenvolvimento ágeis, mudanças em requisitos são bem recebidas, mesmo em fases mais avançadas do desenvolvimento. ',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*59 CERTO*/ 
        question: 'Na dimensão controle da análise essencial de sistemas, são considerados os aspectos temporais e comportamentais do sistema em sua modelagem.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*60 ERRADO*/ 
        question: 'Normalmente, as técnicas de decomposição usadas para estimativas de software baseiam-se na aplicação de fórmulas matemáticas derivadas em experimentos para prever esforço como uma função do tamanho do software.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*61 CERTO*/ 
        question: 'Na análise de pontos de função, as funções transacionais representam as funcionalidades efetivamente fornecidas para o usuário e são categorizadas em entradas externas, saídas externas e consultas externas.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },
      {/*62 ERRADP*/ 
        question: 'Confiabilidade, usabilidade e portabilidade são atributos de qualidade de software do modelo para qualidade em uso Acerca de programação orientada a objetos, Java e PHP, julgue os itens a seguir.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*63 ERRADO*/ 
        question: ' Por meio do mecanismo de sobrecarga, dois métodos de uma mesma classe podem ter o mesmo nome, desde que suas listas de parâmetros sejam diferentes',
        answers: [
        { text: 'Certo', correct: false },
        { text: 'Errado', correct: true }
               
        ]
    
    },
      {/*64 ERRADO*/ 
        question: 'Na herança por especificação, a subclasse especifica a superclasse, acrescentando a ela novos atributos ou métodos, mas mantendo inalterada sua constituição original.',
        answers: [
            { text: 'Errado', correct: true },
            { text: 'Certo', correct: false }
                
               
        ]
    
    },
    {/*65 CERTO*/ 
        question: 'O suporte para a implementação de diversas interfaces em uma única classe é considerado uma solução alternativa para contornar a restrição de herança única própria da linguagem Java.',
        answers: [
        { text: 'Certo', correct: true },
        { text: 'Errado', correct: false }
               
        ]
    
    },

     
    
                        
    
            
    

  
];
/*const random = Math.floor(Math.random() * questions.length);
console.log(random, questions[random]);*/