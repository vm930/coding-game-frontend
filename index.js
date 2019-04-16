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
		let answers = questionsJson[currentIndex].answers;
		answers.map(displayOptions).join(' ');
	});
}
fetchQuestion(currentIndex);

function displayQuestion(question) {
	questionDiv.innerHTML = `
                          <h1></h1></br>
                          <div id = "answerOptionBlock">
                          <ul class="answers">
                          </ul>
                          </div>
                          `;
	const h1 = document.querySelector('h1');
	h1.innerText = `${question.content}`;
}

function displayOptions(answer) {
	const ul = document.querySelector('.answers');
	const newDivtag = document.createElement('div');
	const newImgTag = document.createElement('img');
	newDivtag.className = 'answerEgg';
	newDivtag.dataset.id = `${answer.answer_id}`;
	newDivtag.dataset.iscorrect = `${answer.is_correct}`;
	newDivtag.innerText = `${answer.answer_content}`;
	newImgTag.setAttribute(
		'src',
		'https://png2.kisspng.com/sh/e20c2baf85e4ddab37453a91cb65fc9d/L0KzQYm3U8I5N6doiZH0aYP2gLBuTfVob15uhtU2a3H1cbW0gBhqa5xqhp9uZ3ewh7nwlPUubZhsi58AYXLlc7O5VvVlPJU9UJC8MEO7RIW8WcE2OmM3TagBN0i8R4O1kP5o/kisspng-egg-inc-karad-chicken-egg-white-eggs-5abbcb26ed4d88.303844591522256678972.png'
	);
	newImgTag.className = 'action';
	newImgTag.setAttribute('width', '200');
	newImgTag.setAttribute('height', '200');
	newDivtag.appendChild(newImgTag);
	// newDiv.appendChild(document.createTextNode(`${answer.answer_content}`));
	ul.appendChild(newDivtag);
}

//add event listener
bodyTag.addEventListener('click', function(e) {
	if (e.target.dataset.iscorrect === 'true') {
		//go to the next question
		alert('SMORT!');
		//update currentIndex
		currentIndex++;
		// console.log(currentIndex);
		fetchQuestion(currentIndex);
		if (currentIndex == questionsJson.length && e.target.dataset.iscorrect === 'true') {
			alert('congratulations🏆');
		}
	} else {
		alert('try again!');
	}
}); //end of eventlistening
