
function firstReverse(string) {
	return string.split('').reverse().join('')
}
console.log(firstReverse("!looc si nhoJ"))


function swapCase (string) {
	var chars = string.split('')
	for (var i = 0; i < chars.length; i++) {
		if(chars[i].toUpperCase() === chars[i]) {chars[i] = chars[i].toLowerCase()}
		else{chars[i] = chars[i].toUpperCase()}
	};
	return chars.join('')
}
console.log(swapCase("A String With First Letter Capitalized Was Entered."))