import { createMenuScene } from './create';
import { preloadMenuScene } from './preload';
import { updateMenuScene } from './update';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MenuScene',
};

export default class MainMenuScene extends Phaser.Scene {
  public background: Phaser.GameObjects.Image;
  public text: Phaser.GameObjects.Text;
  public cloud1: Phaser.GameObjects.Image;
  public cloud2: Phaser.GameObjects.Image;
  public cloud3: Phaser.GameObjects.Image;

  constructor() {
    super(sceneConfig);
  }

  public create(): void {
    createMenuScene(this);
  }

  public preload(): void {
    preloadMenuScene(this);
  }

  public update(): void {
    updateMenuScene(this);
  }
}
