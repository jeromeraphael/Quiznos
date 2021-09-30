// this is just the logic for the client-side code that would query the database for questions and then
// save the scores 
// we should probably just put this in the script tag on all of the quiz pages

fetch('http://localhost:4545/science/questions', {
    method: "GET", 
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(response => {
        response.forEach(question => {
            let questionAnswers = ''; 
            let questionArray = [question.answer1, question.answer2, question.answer3, question.answer4];
            questionArray.forEach(q => {
                if (q === question.correctAnswer) {
                    questionAnswers += `<button class="correct">${q}</button>`;
                }
                else {
                    questionAnswers += `<button class="incorrect">${q}</button>`;
                }
                questionAnswers += '<br>';
            })
            let html = `
            <div class='question-container'>
                <p class='questionText'>${question.questionText}</p>
                ${questionAnswers}
            </div>`; 
            document.getElementById("main-container").appendChild(html);  
        });
});

var totalScore = 0; 
const quizId = 1; 

document.getElementsByClassName('correct').addEventListener("click", () => {
});