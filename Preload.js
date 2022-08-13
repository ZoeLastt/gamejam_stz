
//load game assets - can use as menu or create new scene

class Preload extends Phaser.Scene{

    constructor(){

        super("preload_scene");

    }

    preload(){
    
    //
    this.load.image('player', 'assets/images/resizeplayer.png');
    this.load.image('enemy_one', 'assets/images/zombie_one.png');
    this.load.image('bullet', 'assets/images/bullet1.png');
    this.load.image('back', 'assets/images/background.png');
    this.load.image('tent', 'assets/images/tent1.png');

    //ui elements


    }

    create(){

        this.add.text(20,20, "Loading...");

        this.scene.start("main_scene");

    }

}
