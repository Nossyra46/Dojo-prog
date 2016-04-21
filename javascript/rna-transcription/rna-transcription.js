var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(str) {
	var h = {
		A: 'U',
		T: 'A',
		C: 'G',
		G: 'C'
	};

	function hashage(letter) {
		if (h.hasOwnProperty(letter)) {
			return h[letter];
		}
	}

	var res = str.split('');
	res = res.map(hashage);
	res = res.join('');
	return res;
}

module.exports = DnaTranscriber;