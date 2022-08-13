//load game assets - can use as menu or create new scene

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload_scene");
  }

  preload() {
    this.load.image("player", "./assets/resizeplayer.png");
    this.load.image("enemy_one", "./assets/zombie_one.png");
    this.load.image("bullet", "./assets/bullet1.png");
    this.load.image("back", "./assets/background.png");
    this.load.image("back", "./assets/background.png");
    this.load.image("tent", "./assets/tent1.png");
  }

  create() {
    this.add.text(20, 20, "Loading...");
    this.scene.start("main_scene");
  }
}
