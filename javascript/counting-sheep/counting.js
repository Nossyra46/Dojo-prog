var Counting = function() {
	this.count = function(array) {
		var sheeps = array.filter(function(e){return e;}).length;
		var others = array.filter(function(e){return !e;}).length;

		if (sheeps+others !== array.length) {}
	}
}

module.exports = Counting;