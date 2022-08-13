import Phaser from "phaser";
import config from "./config";
import main_scene from "./scenes/Game";
import preload_scene from "./scenes/Preload";

new Phaser.Game(
  Object.assign(config, {
    scene: [preload_scene, main_scene],
  })
);
