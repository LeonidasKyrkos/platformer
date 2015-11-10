function World() {
	this.settings();
	this.initialiseWorld();
};

World.prototype = {
	settings: function(){
		this.worldspace = document.getElementById('world');
		this.gravity = 9.8;
	},
	initialiseWorld: function(){
		console.log(this.settings);
	}
}

module.exports = World;