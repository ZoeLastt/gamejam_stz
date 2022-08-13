export default class Menu extends Phaser.Scene {



    constructor() {
        super("menu_scene");
    }

    create(){

        this.add.image(480, 320, "back2");

        var play_btn = this.add.image(480, 300, 'play_btn');
        play_btn.setInteractive();
        play_btn.on('pointerdown', ()=> {this.scene.start("main_scene");});
        play_btn.on('pointerover', ()=> {play_btn.alpha = .7;});
        play_btn.on('pointerout', ()=> {play_btn.alpha = 1;});

        var controls_btn = this.add.image(480, 400, 'control_btn');
        controls_btn.setInteractive();
        controls_btn.on('pointerdown', ()=> {console.log("controls click")});
        controls_btn.on('pointerover', ()=> {this.hover(controls_btn, .7);});
        controls_btn.on('pointerout', ()=> {this.hover(controls_btn, 1);});

    }

    hover(btn_name: any, alpha_num: any){

        btn_name.alpha = alpha_num;
        //play sound

    }

}