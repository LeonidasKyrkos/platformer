function World() {
	this.init();
};

World.prototype = {
	init: function(){
		console.log('hello world');
	}
}

module.exports = World;