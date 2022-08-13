//load game assets

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload_scene");
  }

  preload() {
    this.load.image("player", "./assets/finalplayer.png");
    this.load.image("enemy_one", "./assets/newzom.png");
    this.load.image("bullet", "./assets/bullet1.png");
    this.load.image("back", "./assets/background2.png");
    this.load.image("back2", "./assets/finalbg.png");
    this.load.image("tent", "./assets/croptent.png");
    this.load.image("play_btn", "./assets/startbtn2.png");
    this.load.image("control_btn", "./assets/control.png");

    this.load.audio("click", "./assets/btn_click.wav");

  }

  create() {
    this.add.text(20, 20, "Loading...");
    this.scene.start("menu_scene");
  }
}
