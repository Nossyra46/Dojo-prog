var Hamming = function() {};

Hamming.prototype.compute = function(str1, str2) {
	var hash = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	};

	var hammingDistance = 0;

	if (str1 === str2) {
		hammingDistance = 0;
	}
	else {
		hammingDistance = 1;
	}

	return hammingDistance;
}

module.exports = Hamming;