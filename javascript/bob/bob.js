var Bob = function(){};

Bob.prototype.hey = function(str) {
	function isSilence(str){
		return str.replace(/\s+/g, '') === '';
	}

	function isShouting(str) {
		return str.toUpperCase() === str && /[A-Z]/g.test(str);
	}

	function isQuestion(str) {
		return str[str.length - 1] === '?';
	}

	
	if (isSilence(str)) {
		return 'Fine. Be that way!';
	}
	else if (isShouting(str)) {
		return 'Whoa, chill out!';
	}
	else if (isQuestion(str)) {
		return 'Sure.'
	}
	else {
		return 'Whatever.';
	}
};

module.exports = Bob;
