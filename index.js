const urlBase = 'http://localhost:3000';
const urlQuestions = `${urlBase}/questions`;
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('#questionBlock');
const answersDiv = document.querySelector('#answerOptionBlock');
const startButton = document.querySelector('#start');
const initCardTag = document.querySelector('#resizeCard');
let questionsJson;
let currentIndex = 6;
let level = 0;

startGame();

startButton.addEventListener('click', function(e) {
	if (e.target.id === 'start') {
		document.querySelector('p').remove();
		fetchQuestion(currentIndex);
		e.target.style.visibility = 'hidden';
	}
});

function startGame() {
	const newPtag = document.createElement('p');
	const newImg = document.createElement('img');

	newPtag.innerHTML = `<span id="startsentence">Help eggs hatch to chicken by learning HTML and  CSS basics! </span><br>
		In this game, you must answer correctly of all the questions to help them growing into grown chickens! <br>
		Learn to code by playing games.`;
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
		newImgTag.className = 'action';
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
		newImgTag.setAttribute(
			'src',
			// 'https://png2.kisspng.com/sh/e20c2baf85e4ddab37453a91cb65fc9d/L0KzQYm3U8I5N6doiZH0aYP2gLBuTfVob15uhtU2a3H1cbW0gBhqa5xqhp9uZ3ewh7nwlPUubZhsi58AYXLlc7O5VvVlPJU9UJC8MEO7RIW8WcE2OmM3TagBN0i8R4O1kP5o/kisspng-egg-inc-karad-chicken-egg-white-eggs-5abbcb26ed4d88.303844591522256678972.png'
			//
			'./asset/kisspng-chicken-egg-chicken-egg-clip-art-bigfoot-chick-broken-egg-out-of-egg.png'
			// 'https://mpng.pngfly.com/20180226/rze/kisspng-chicken-egg-eggshell-cute-cartoon-chick-egg-shell-eggs-broken-shell-5a93deced29fe2.3493549015196402708627.jpg'
		);
		newImgTag.className = 'action';
		newImgTag.setAttribute('width', '200');
		newImgTag.setAttribute('height', '200');
		newDivtag.appendChild(newImgTag);
		// newDiv.appendChild(document.createTextNode(`${answer.answer_content}`));
		ul.appendChild(newDivtag);
	}
}

// function revoluteChicken() {
// 	const que = document.querySelector('.answerEgg');
// 	que.src =
// 		'https://banner2.kisspng.com/20180224/dwq/kisspng-chicken-egg-chicken-egg-clip-art-bigfoot-chick-broken-egg-out-of-egg-5a91052f6bd956.9205172115194534874418.jpg';
// }

//add event listener
questionDiv.addEventListener('click', function(e) {
	const eggImgTag = e.target;
	if (eggImgTag.parentNode.dataset.iscorrect === 'true') {
		//go to the next question
		alert('SMORT!');
		//put out the imagine
		// eggImgTag.src =
		// 	'https://banner2.kisspng.com/20180224/dwq/kisspng-chicken-egg-chicken-egg-clip-art-bigfoot-chick-broken-egg-out-of-egg-5a91052f6bd956.9205172115194534874418.jpg';
		// console.log(eggImgTag.src);
		//update currentIndex
		currentIndex++;
		level++;
		// console.log(currentIndex);
		fetchQuestion(currentIndex);

		//check to see if all the questions are answered
		if (currentIndex == questionsJson.length && eggImgTag.parentNode.dataset.iscorrect === 'true') {
			alert('congratulations🏆');
			//put out the final chicken animation
		}
	} else if (eggImgTag.parentNode.dataset.iscorrect === 'false') {
		alert('try again!');
	} else {
		alert('oops!wrong places!');
	}
}); //end of eventlistening
