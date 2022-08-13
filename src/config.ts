import Phaser from "phaser";


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game",

  scale: {
    width: 960,
    height: 640,

    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

export default config;
