const urlBase = 'http://localhost:3000';
const urlQuestions = `${urlBase}/questions`;
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('#questionBlock');
const answersDiv = document.querySelector('#answerOptionBlock');
let questionsJson;
let currentIndex = 10;

//fetch data
function fetchQuestion(currentIndex) {
	fetch(urlQuestions).then((resp) => resp.json()).then(function(json) {
		questionsJson = json;
		displayQuestion(questionsJson[currentIndex]);
	});
}

fetchQuestion(currentIndex);

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
		alert('SMORT!');
		//update currentIndex
		currentIndex ++;
    // console.log(currentIndex);
		fetchQuestion(currentIndex);
    if(currentIndex == questionsJson.length && e.target.dataset.iscorrect === 'true'){
      alert('congratulations🏆')
    };
	} else {
		alert('try again!');
	}
}); //end of eventlistening
