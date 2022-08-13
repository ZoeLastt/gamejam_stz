
//game vars
var player;
var enemy;
var bullet;
var input;
var keys;

var shot_control = false;
var player_walk = 100;
var player_sprint = 200;

//set up
window.onload = function(){

    var config = {
        type: Phaser.AUTO,
        width: 960,
        height: 640,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [Preload, Main],
    };
    var game = new Phaser.Game(config);

}

//space for func, decrease health etc

