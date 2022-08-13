export default class Die extends Phaser.Scene {
    constructor() {
      super("die_scene");
    }

    create(){
      this.add.text(10, 10, "you died... click to return to menu <3");
    }

    update(){
      
      if (this.input.mousePointer.isDown){

        this.scene.start("menu_scene");

      }
      
    }

  }