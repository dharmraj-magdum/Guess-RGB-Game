//get elements
const values = document.getElementById("values");

var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

var difficulty = 5;
var difficultyValue = 20;
var AnsR = 0;
var AnsG = 0;
var AnsB = 0;
function getRandomValues() {
	AnsR = Math.floor(Math.random() * 256);
	AnsG = Math.floor(Math.random() * 256);
	AnsB = Math.floor(Math.random() * 256);
	// return [r, g, b];
}
getRandomValues();
document.getElementById("values").innerHTML =
	"( " + AnsR + " , " + AnsG + " , " + AnsB + " )";

//select any one ele as answer
var index = Math.floor(Math.random() * 3);

document.getElementById(`color${index + 1}`).style.backgroundColor =
	"rgb(" + AnsR + "," + AnsG + "," + AnsB + ")";

//make array of options(expect answer)
var arr = [];
for (let i = 0; i < 3; i++) {
	if (i == index) {
		continue;
	}
	arr.push(i);
}
function reset() {
	for (const i in arr) {
		var max = AnsR;
		var r = Math.floor(Math.random() * 256);
		var max = r + difficultyValue;
		var min = r - difficultyValue;
		//get G and B near to R
		//rand=(0-1*diff)+min gives value rand(max-min)
		var g = Math.floor(Math.random() * (max - min) + min);
		var b = Math.floor(Math.random() * (max - min) + min);
		return [r, g, b];
	}
	//get complete random R
	var r = Math.floor(Math.random() * 256);
	var max = r + difficultyValue;
	var min = r - difficultyValue;
	//get G and B near to R
	//rand=(0-1*diff)+min gives value rand(max-min)
	var g = Math.floor(Math.random() * (max - min) + min);
	var b = Math.floor(Math.random() * (max - min) + min);
	return [r, g, b];
}

function getCloseValues(ch) {}
