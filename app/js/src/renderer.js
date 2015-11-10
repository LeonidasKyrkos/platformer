function Renderer() {
	this.settings();
	this.render();
};

Renderer.prototype = {
	settings: function() {
		this.fps = 60;
	},
	render: function() {
		this.refreshCanvas();
	},
	refreshCanvas: function() {
		console.log('i refresh the canvas do stuff');
	}
}

module.exports = Renderer;