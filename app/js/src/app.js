'use strict';

var $ = require('jquery');
var Renderer = require('./renderer');
var World = require('./world');
var Character = require('./character');
var Calculator = require('./calculator');


var dorendering = new Renderer();
var calculator = new Calculator();
var createCharacter = new Character();
var makeworld = new World();