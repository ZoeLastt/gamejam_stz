
//game vars
var player;
var enemy;
var bullet;
var input;
var keys;
var tent;

var shot_control = false;
var player_walk = 100;
var player_sprint = 200;

var bullets = 10;
var health = 100;
var stamina = 100;
var enemies_remaining;

var bullet_text;

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
                debug: true
            }
        },
        scene: [Preload, Main],
    };
    var game = new Phaser.Game(config);

}

function bullet_hit_enemy(){

    //destroy objects
    bullet.destroy();
    enemy.destroy();

}

function set_bullet_num(){

    if(bullets > 0){

        bullets -= 1;
        console.log(bullets);

    }

    //decrease ui text
    //restrict player 
    

}
