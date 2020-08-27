import { getGameWidth, getGameHeight } from '../../helpers/helpers';
import StartScene from '.';

export function createStartScene(scene: StartScene): void {
  scene.add.image(0, 0, 'backgroundImage');
  // Add a player sprite that can be moved around. Place him in the middle of the screen.
  scene.setImage(scene.physics.add.sprite(getGameWidth(scene) / 2, getGameHeight(scene) / 2, 'man'));

  // This is a nice helper Phaser provides to create listeners for some of the most common keys.
  scene.setCursorKey(scene.input.keyboard.createCursorKeys());
}
