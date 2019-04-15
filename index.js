const urlBase = 'http://localhost:3000';
const urlQuestions = `${urlBase}/questions`;
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('#questionBlock');
const answersDiv = document.querySelector('#answerOptionBlock');
let questionsJson;
let currentIndex = 6;

//fetch data
function fetchQuestion(currentIndex) {
	fetch(urlQuestions).then((resp) => resp.json()).then(function(json) {
		questionsJson = json;
		displayQuestion(questionsJson[currentIndex]);
    let answers = questionsJson[currentIndex].answers
    answers.map(displayOptions).join(' ')
	});
}

fetchQuestion(currentIndex);

function displayQuestion(question) {
	questionDiv.innerHTML = `
        <h1>${question.content}</h1></br>
        <div id = "answerOptionBlock">
        <ul>
        </ul>
        </div>
        `;
}

function displayOptions(answer){
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
      li.dataset.iscorrect =`${answer.is_correct}`
   li.appendChild(document.createTextNode(`${answer.answer_content}`));
   ul.appendChild(li)
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
