import { createStartScene } from './create';
import { preloadStartScene } from './preload';
import { updateStartScene } from './update';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'StartScene',
};

export default class StartScene extends Phaser.Scene {
  public speed = 200;

  public cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  public image: Phaser.Physics.Arcade.Sprite;
  public background: Phaser.GameObjects.Image;

  constructor() {
    super(sceneConfig);
  }

  public preload(): void {
    preloadStartScene(this);
  }

  public create(): void {
    createStartScene(this);
  }

  public update(): void {
    updateStartScene(this);
  }
}
