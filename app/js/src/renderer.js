function Renderer() {
	this.settings();
	this.render();
};

Renderer.prototype = {
	settings: function() {
		this.fps = 60;
		this.gravity = 9.8;
	},
	render: function() {
		this.createCanvas();
	},
	createCanvas: function() {
		console.log('i make the canvas do stuff');
	}
}

module.exports = Renderer;