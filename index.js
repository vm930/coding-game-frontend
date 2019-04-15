// console.log('hey');
let url = 'http://localhost:3000/questions';
fetch(url).then((resp) => resp.json()).then(function(questions) {
	questions.forEach(function(question) {
		displayQuestion(question);
	});
});

function displayQuestion(question) {
	const table = document.querySelector('.question');
	table.innerHTML = `
        <h1>${question.content}</h1>
        `;
}
