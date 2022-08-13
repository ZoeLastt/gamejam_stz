export default class Menu extends Phaser.Scene {

    //private play_btn;

    constructor() {
        super("menu_scene");
    }

    create(){

        this.add.image(480, 320, "back");

        this.add.image(480, 100, 'menu_header');

        var play_btn = this.add.image(480, 300, 'play_btn');
        play_btn.setInteractive();
        play_btn.on('pointerdown', ()=> {this.scene.start("main_scene");});
        play_btn.on('pointerhover', ()=> {console.log("hover");});//do something on hover 

    }

}