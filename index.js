const urlBase = 'http://localhost:3000';
const urlQuestions = `${urlBase}/questions`;
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('#questionBlock');
const answersDiv = document.querySelector('#answerOptionBlock');
const initCardTag = document.querySelector('#resizeCard');
// const canvaTag = document.querySelector('#c');

let questionsJson;
let currentIndex = 0;
let level = 0;

startGame();

initCardTag.addEventListener('click', function(e) {
	if (e.target.id === 'start') {
		document.querySelector('p').remove();
		e.target.style.visibility = 'hidden';
		fetchQuestion(currentIndex);
	}
});

function startGame() {
	const newPtag = document.createElement('p');
	const newImg = document.createElement('img');

	newPtag.innerHTML = `<span id="startsentence">Help eggs hatch to chicken by learning HTML and  CSS basics! </span><br>
		In this game, you must answer correctly of all the questions<br>
		to help them growing into grown chickens!<br>
		Learn to code by playing games.

		<button class="waves-effect waves-light btn-large btn-floating scale-transition pulse light-blue accent-3"
		style="font-weight: bold; font-size: 1px font-family:Ubuntu, sans-serif" id="start">Start!</button>
		`;
	newImg.setAttribute('src', 'https://media.giphy.com/media/xTiTnsPhNtZETMmN1e/giphy.gif');
	newPtag.appendChild(newImg);
	initCardTag.appendChild(newPtag);
}

//fetch data
function fetchQuestion(currentIndex) {
	fetch(urlQuestions).then((resp) => resp.json()).then(function(json) {
		questionsJson = json;
		displayQuestion(questionsJson[currentIndex]);
		let answers = questionsJson[currentIndex].answers;
		answers.map(displayOptions).join(' ');
	});
}

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
	if (level === 0) {
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
		newImgTag.className = 'shake-slow shake-constant shake-constant--hover';
		// newImgTag.className = 'shake-action';
		newImgTag.setAttribute('width', '200');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		// newDiv.appendChild(document.createTextNode(`${answer.answer_content}`));
		ul.appendChild(newDivtag);
	}
	if (level === 1) {
		const ul = document.querySelector('.answers');
		const newDivtag = document.createElement('div');
		const newImgTag = document.createElement('img');
		newDivtag.className = 'answerEgg';
		newDivtag.dataset.id = `${answer.answer_id}`;
		newDivtag.dataset.iscorrect = `${answer.is_correct}`;
		newDivtag.innerText = `${answer.answer_content}`;
		newImgTag.setAttribute('src', './asset/hatchegg.png');
		newImgTag.className = 'shake-slow shake-constant shake-constant--hover';
		// newImgTag.id = 'action';
		newImgTag.setAttribute('width', '140');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		ul.appendChild(newDivtag);
	}

	if (level === 2) {
		const ul = document.querySelector('.answers');
		const newDivtag = document.createElement('div');
		const newImgTag = document.createElement('img');
		newDivtag.className = 'answerEgg';
		newDivtag.dataset.id = `${answer.answer_id}`;
		newDivtag.dataset.iscorrect = `${answer.is_correct}`;
		newDivtag.innerText = `${answer.answer_content}`;
		newImgTag.setAttribute(
			'src',
			'./asset/kisspng-chicken-egg-chicken-egg-clip-art-bigfoot-chick-broken-egg-out-of-egg.png'
		);
		newImgTag.className = 'shake-chunk';
		newImgTag.setAttribute('width', '200');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		ul.appendChild(newDivtag);
	}

	if (level === 3) {
		const ul = document.querySelector('.answers');
		const newDivtag = document.createElement('div');
		const newImgTag = document.createElement('img');
		newDivtag.className = 'answerEgg';
		newDivtag.dataset.id = `${answer.answer_id}`;
		newDivtag.dataset.iscorrect = `${answer.is_correct}`;
		newDivtag.innerText = `${answer.answer_content}`;
		newImgTag.setAttribute('src', './asset/chick5.png');
		newImgTag.className = 'action';
		newImgTag.setAttribute('width', '200');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		ul.appendChild(newDivtag);
	}

	if (level === 4) {
		const ul = document.querySelector('.answers');
		const newDivtag = document.createElement('div');
		const newImgTag = document.createElement('img');
		newDivtag.className = 'answerEgg';
		newDivtag.dataset.id = `${answer.answer_id}`;
		newDivtag.dataset.iscorrect = `${answer.is_correct}`;
		newDivtag.innerText = `${answer.answer_content}`;
		newImgTag.setAttribute('src', './asset/chic3.png');
		newImgTag.className = 'shake-rotate';
		newImgTag.setAttribute('width', '200');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		ul.appendChild(newDivtag);
	}

	if (level === 5) {
		const ul = document.querySelector('.answers');
		const newDivtag = document.createElement('div');
		const newImgTag = document.createElement('img');
		newDivtag.className = 'answerEgg';
		newDivtag.dataset.id = `${answer.answer_id}`;
		newDivtag.dataset.iscorrect = `${answer.is_correct}`;
		newDivtag.innerText = `${answer.answer_content}`;
		newImgTag.setAttribute('src', './asset/chick4.png');
		newImgTag.className = 'shake-hard shake-constant shake-constant--hover';
		newImgTag.setAttribute('width', '200');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		ul.appendChild(newDivtag);


	}
}

//add event listener
questionDiv.addEventListener('click', function(e) {
	const eggImgTag = e.target;
	if (eggImgTag.parentNode.dataset.iscorrect === 'true') {
		//go to the next question
		alert('SMORT!');
		currentIndex++;
		level++;
		fetchQuestion(currentIndex);

		//check to see if all the questions are answered
		if (currentIndex == 6 && eggImgTag.parentNode.dataset.iscorrect === 'true') {
			alert('congratulations🏆');
			//put out the final chicken animation

			displayChickens();
			//https://media.giphy.com/media/l41lMU9vPdqjrA4QE/giphy.gif
		}
	} else if (eggImgTag.parentNode.dataset.iscorrect === 'false') {
		alert('try again!');
	} else {
		alert('oops!wrong places!');
	}
}); //end of eventlistening

function displayChickens() {
	//clear the container
	const newScriptTag1 = document.createElement('script');
	const newScriptTag2 = document.createElement('script');
	const newScriptTag3 = document.createElement('script');
	newScriptTag1.src = 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js';
	newScriptTag2.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.10.0/matter.min.js';
	newScriptTag3.src = 'test2.js';

	bodyTag.appendChild(newScriptTag1);
	bodyTag.appendChild(newScriptTag2);
	bodyTag.appendChild(newScriptTag3);

	document.querySelector('#resizeCard').innerHTML = ''
	document.querySelector('#resizeCard').innerHTML = `<div id="chicken-container"></div>`


}

// .addEventListener("mouseover", (e) => {
// 	e.preventDefault();
// 	if (input.value === "") {
// 		input.classList.add("apply-shake");
// 	}
// });

// questionDiv.addEventListener('mouseover', (e) => {
// 	if (e.target.className === 'action' || e.target.className === "shake-action") {
// 		e.target.classList.add('apply-shake');
// 		// console.log(e.target);
// 	}
// });

// <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
// 	<script src='https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.10.0/matter.min.js'></script>

// 	<script src="test2.js"></script>
