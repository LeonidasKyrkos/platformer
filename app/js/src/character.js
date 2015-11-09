function Character() {
	this.makeCharacter();
}

Character.prototype = {
	makeCharacter: function() {
		console.log('i make a character for you to play as');
	}
}

module.exports = Character;