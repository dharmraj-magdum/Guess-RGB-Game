console.log("Script is running");
//get elements
const values = document.getElementById("values");
const colors = document.getElementById("colors").children;
const answer = document.getElementById("answer");
const difficulty = document.getElementById("difficulty");

//Global variables
var corrIdx = 0;
var guessed = 0;
var difficultyValue = 70;
var AnsR = 0;
var AnsG = 0;
var AnsB = 0;

//set Random color as Question
function setRandomValues() {
	AnsR = Math.floor(Math.random() * 256);
	AnsG = Math.floor(Math.random() * 256);
	AnsB = Math.floor(Math.random() * 256);
}

difficulty.addEventListener("change", setDificulty);
function setDificulty(Event) {
	//set difficulty
	let mode = Event.target.value;
	// console.log(mode);
	switch (mode) {
		case "easy":
			difficultyValue = 255;
			break;
		case "medium":
			difficultyValue = 100;
			break;
		case "hard":
			difficultyValue = 20;
			break;
		default:
			break;
	}
	// console.log(difficultyValue);
}
// difficulty.addEventListener("change", function setDificulty(Event) {
// 	//set difficulty
// 	let mode = Event.target.value;
// 	console.log(mode);
// });

function reset() {
	setRandomValues();

	//question Text
	values.innerHTML = "( " + AnsR + " , " + AnsG + " , " + AnsB + " )";

	//select any one ele as Answer
	corrIdx = Math.floor(Math.random() * 3);
	// console.log(corrIdx);
	colors[corrIdx].style.backgroundColor =
		"rgb(" + AnsR + "," + AnsG + "," + AnsB + ")";

	//for other option random colors
	for (let idx = 0; idx < 3; idx++) {
		if (idx == corrIdx) {
			continue;
		}
		let r = getCloseValues(AnsR);
		while (r == AnsR) {
			r = getCloseValues(AnsR);
		}
		let g = getCloseValues(AnsG);
		while (g == AnsG) {
			g = getCloseValues(AnsG);
		}
		let b = getCloseValues(AnsB);
		while (b == AnsB) {
			b = getCloseValues(AnsB);
		}
		//set bg to options
		colors[idx].style.backgroundColor =
			"rgb(" + r + "," + g + "," + b + ")";
	}
}
reset();
//give random value close to give with difficulty
function getCloseValues(val) {
	var max = val + difficultyValue;
	var min = val - difficultyValue;
	max = max > 255 ? 255 : max;
	min = min < 0 ? 0 : min;
	//rand=(0-1*diff)+min gives value rand(max-min)
	return Math.floor(Math.random() * (max - min) + min);
}

function guess() {
	guessed = document.activeElement.id - 1;
	if (guessed == corrIdx) {
		answer.innerHTML = "CORRECT !!";
		answer.style.color = "darkgreen";
		colors[guessed].classList.add("correct");
	} else {
		answer.innerHTML = "WRONG !!";
		answer.style.color = "red";
		colors[corrIdx].classList.add("correct");
		colors[guessed].classList.add("wrong");
	}

	for (let idx = 0; idx < 3; idx++) {
		// console.log(colors[idx]);
		colors[idx].disabled = true;
	}
}

function replay() {
	//remove answer inidators on colors
	colors[corrIdx].classList.remove("correct");
	colors[guessed].classList.remove("correct");
	colors[guessed].classList.remove("wrong");
	//call reset which reset que and options
	reset();
	///remove prev answer
	answer.innerHTML = "";
	//remove disbled attri on buttons
	for (let idx = 0; idx < 3; idx++) {
		colors[idx].disabled = false;
	}
}

//------------------------------------
