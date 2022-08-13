
//load game assets - can use as menu or create new scene

class Preload extends Phaser.Scene{

    constructor(){

        super("preload_scene");

    }

    preload(){

    this.load.image('player', 'resizeplayer.png');
    this.load.image('enemy_one', 'zombie_one.png');
    this.load.image('bullet', 'bullet1.png');
    this.load.image('back', 'background.png');

    }

    create(){

        this.add.text(20,20, "Loading...");

        this.scene.start("main_scene");

    }

    

}
