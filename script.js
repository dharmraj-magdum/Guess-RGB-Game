console.log("Script is running");
//get elements
const values = document.getElementById("values");
const colors = document.getElementById("colors").children;
const answer = document.getElementById("answer");

var corrIdx;
var difficulty = 5;
var difficultyValue = 70;
var AnsR = 0;
var AnsG = 0;
var AnsB = 0;
function setRandomValues() {
	AnsR = Math.floor(Math.random() * 256);
	AnsG = Math.floor(Math.random() * 256);
	AnsB = Math.floor(Math.random() * 256);
	// return [r, g, b];
}

function reset() {
	setRandomValues();

	document.getElementById("values").innerHTML =
		"( " + AnsR + " , " + AnsG + " , " + AnsB + " )";

	//select any one ele as answer
	corrIdx = Math.floor(Math.random() * 3);
	console.log(corrIdx);
	colors[corrIdx].style.backgroundColor =
		"rgb(" + AnsR + "," + AnsG + "," + AnsB + ")";

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
		colors[idx].style.backgroundColor =
			"rgb(" + r + "," + g + "," + b + ")";
	}
}
reset();
//give random value close to give with difficulty
function getCloseValues(val) {
	var max = val + difficultyValue;
	var min = val - difficulty;
	max = max > 255 ? 255 : max;
	min = min < 0 ? 0 : min;
	//rand=(0-1*diff)+min gives value rand(max-min)
	return Math.floor(Math.random() * (max - min) + min);
}

function guess() {
	if (document.activeElement.id - 1 == corrIdx) {
		answer.innerHTML = "CORRECT !!";
		answer.style.color = "darkgreen";
	} else {
		answer.innerHTML = "WRONG !!";
		answer.style.color = "red";
	}
}

//------------------------------------
// colors[0].style.backgroundColor = "rgb(" + 255 + "," + 0 + "," + 0 + ")";
// colors[1].style.backgroundColor = "rgb(" + 0 + "," + 255 + "," + 0 + ")";
// colors[2].style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 255 + ")";
