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

  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private image: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super(sceneConfig);
  }

  public getCursorKey(): Phaser.Types.Input.Keyboard.CursorKeys {
    return this.cursorKeys;
  }

  public setCursorKey(cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys): void {
    this.cursorKeys = cursorKeys;
  }

  public getImage(): Phaser.Physics.Arcade.Sprite {
    return this.image;
  }

  public setImage(image: Phaser.Physics.Arcade.Sprite): void {
    this.image = image;
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
