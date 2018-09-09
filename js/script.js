
let str = "урок-3-был очень легким";

function upperCaseOneLetter(str) {
	str = str[0].toUpperCase() + str.substring(1);
	return str;
}

str = upperCaseOneLetter(str);




function toReplace(str, a, b) {
	let strLength = str.length;
	let arrHyphen = []; // Масив с местом дефиса в строке.
	let j = 0;

	for (var i = 1; i < strLength; i++) {
		if (str.substring(i, i + 1) == '-') {
			arrHyphen[j] = i;
			j++;
		}
	}

	let newStr = str[0];

	for (var i = 0; i <= j; i++) {
		newStr = newStr + str.substring(i + 1, arrHyphen[i]) + ' ';
	}

	// return newStr;
}


















