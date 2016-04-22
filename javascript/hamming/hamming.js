var Hamming = function() {};

Hamming.prototype.compute = function(str1, str2) {
	var hammingDistance = 0;

	if (str1.length !== str2.length) {
		throw new Error("DNA strands must be of equal length.")
	}
	else {
		for (var i = 0; i < str1.length; i++) {
			if (str1[i] != str2[i]) {
				hammingDistance ++;
			}
		}

		return hammingDistance;
	}
}

module.exports = Hamming;