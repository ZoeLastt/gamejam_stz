import Phaser from "phaser";
import config from "./config";
import main_scene from "./scenes/Game";
import preload_scene from "./scenes/Preload";
import menu_scene from "./scenes/Menu";
import die_scene from "./scenes/Die";

new Phaser.Game(
  Object.assign(config, {
    scene: [preload_scene, menu_scene,  main_scene, die_scene],
  })
);
