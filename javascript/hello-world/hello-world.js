var HelloWorld = function(){};

HelloWorld.prototype.hello = function(name) {
	if (name == '') {
		return 'Hello, World!';
	}
	else {
		return 'Hello, '+name+'!';
	}
};

module.exports = HelloWorld;
