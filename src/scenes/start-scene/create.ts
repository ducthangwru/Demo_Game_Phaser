import { getGameWidth, getGameHeight } from '../../helpers/helpers';
import StartScene from '.';

export function createStartScene(scene: StartScene): void {
  const width = getGameWidth(scene);
  const height = getGameHeight(scene);

  scene.background = scene.add.image(width / 2, height / 2, 'backgroundImage');
  scene.background.displayHeight = height;
  scene.background.displayWidth = width;

  // Add a player sprite that can be moved around. Place him in the middle of the screen.
  scene.image = scene.physics.add.sprite(width / 2, height / 2, 'man');

  // This is a nice helper Phaser provides to create listeners for some of the most common keys.
  scene.cursorKeys = scene.input.keyboard.createCursorKeys();
}
