var Words = function() {};

Words.prototype.count = function(str) {
	var countHash = {};
	var wordsArray = str.trim().toLowerCase().split(/\s+/);
	for(var i=0; i<wordsArray.length; ++i){
		if (countHash.hasOwnProperty(wordsArray[i])) {
			countHash[wordsArray[i]] ++;
		}
		else {
			countHash[wordsArray[i]] = 1;
		}
	}
	return countHash;
}


module.exports = Words;