const urlBase = 'http://localhost:3000';
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('#questionBlock');
const answersDiv = document.querySelector('#answerOptionBlock');
let questionsJson;

//fetch data
fetch(`${urlBase}/questions`).then((resp) => resp.json()).then(function(json) {
	questionsJson = json;
	displayQuestion(questionsJson[3]);
});

function displayQuestion(question) {
	questionDiv.innerHTML = `
        <h1>${question.content}</h1></br>
        <div id = "answerOptionBlock">
        <ul>
        ${question.answers
			.map(function(answer) {
				return `<li data-iscorrect= "${answer.is_correct}">${answer.answer_content}</li>`;
			})
			.join('')}
        </ul>
        </div>
        `;
}

//add event listener
bodyTag.addEventListener('click', function(e) {
	if (e.target.dataset.iscorrect === 'true') {
		//go to the next question
	} else {
		alert('try again!');
	}
}); //end of eventlistening
