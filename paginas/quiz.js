const questions = [
    /* 1 */
    {
        question: "O que é um patógeno?",
        answers: [
            { Text: "a) Um medicamento para tratar doenças", correct: false },
            { Text: "b) Um organismo que causa doenças", correct: true },
            { Text: "c) Uma vitamina essencial para a saúde", correct: false },
            { Text: "d) Um tipo de célula do sistema imunológico", correct: false },
        ]
    },
    /* 2 */
    {
        question: "Qual das seguintes doenças é transmitida por mosquitos?",
        answers: [
            { Text: "a) Gripe", correct: false },
            { Text: "b) Tuberculose", correct: false },
            { Text: "c) Malária", correct: true },
            { Text: "d) Diabetes", correct: false },
        ]
    },
     /* 3 */
     {
        question: "O que é a vacinação?",
        answers: [
            { Text: "a) Um tratamento para doenças crônicas", correct: false },
            { Text: "b) Um método de prevenção de doenças através da administração de agentes patogênicos atenuados ou inativados", correct: true},
            { Text: "c) Um procedimento cirúrgico para remover tumores", correct: false },
            { Text: "d) Uma técnica de relaxamento para aliviar o estresse", correct: false },
        ]
    },
     /* 4 */
     {
        question: "Quais são os sintomas típicos da gripe?",
        answers: [
            { Text: "a) Coceira e vermelhidão na pele", correct: false },
            { Text: "b) Febre, tosse, e dores musculares", correct: true },
            { Text: "c) Visão embaçada e sensibilidade à luz", correct: false },
            { Text: "d) Perda de memória e confusão", correct: false },
        ]
    },
     /* 5 */
     {
        question: "Qual é a principal causa de transmissão do HIV?",
        answers: [
            { Text: "a) Picada de mosquito", correct: false },
            { Text: "b) Contato com fluidos corporais infectados, como sangue e esperma", correct: true },
            { Text: "c) Inalação de ar contaminado", correct: false },
            { Text: "d) Consumo de alimentos contaminados", correct: false },
        ]
    },
     /* 6 */
     {
        question: "O que é a hipertensão arterial?",
        answers: [
            { Text: "a) Um distúrbio do sistema digestivo", correct: false},
            { Text: "b) Uma condição em que a pressão sanguínea nas artérias está elevada", correct: true },
            { Text: "c) Uma infecção viral nos pulmões", correct: false },
            { Text: "d) Uma doença genética transmitida de pais para filhos", correct: false },
        ]
    },
     /* 7 */
     {
        question: "O que é a diabetes tipo 2?",
        answers: [
            { Text: "a) Uma doença autoimune", correct: false },
            { Text: "b) Um distúrbio alimentar", correct: false },
            { Text: "c) Uma condição em que o corpo não produz insulina suficiente ou não a utiliza eficazmente", correct: true },
            { Text: "d) Uma infecção bacteriana na pele", correct: false },
        ]
    },
     /* 8 */
     {
        question: "Qual é a função principal dos antibióticos?",
        answers: [
            { Text: "a) Tratar doenças virais", correct: false },
            { Text: "b) Estimular o sistema imunológico", correct: false },
            { Text: "c) Matar ou inibir o crescimento de bactérias", correct: true },
            { Text: "d) Reduzir a inflamação nas articulações", correct: false },
        ]
    },
     /* 9 */
     {
        question: "Qual é o principal órgão afetado pela doença de Alzheimer?",
        answers: [
            { Text: "a) Cerebro", correct: true },
            { Text: "b) Pulmões", correct: false },
            { Text: "c) Coração", correct: false },
            { Text: "d) Fígado", correct: false },
        ]
    }, /* 10 */
    {
        question: "O que é a imunização de rebanho (ou imunidade coletiva)?",
        answers: [
            { Text: "a) Um tipo de terapia física", correct: false },
            { Text: "b) A proteção de um indivíduo contra várias doenças", correct: false },
            { Text: "c) A situação em que um grande percentual da população é imune a uma doença, oferecendo proteção indireta aos não imunizados", correct: true },
            { Text: "d) A prática de isolar pessoas doentes para evitar a propagação de doenças", correct: false },
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const exitButton = document.getElementById("exit-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";[
    ]
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
questionElement.innerHTML = `Pontuação: ${score} / ${questions.length}!`;
nextButton.innerHTML = "Jogar novamente";
nextButton.style.display = "block";
exitButton.innerHTML = "Sair do quiz";
exitButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()

function redirecionar() {
    window.location.href = "cvs.html"
}