import { MenuButton } from '../../ui/menu-button';
import MainMenuScene from '.';

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export function createMenuScene(scene: MainMenuScene): void {
  scene.add
    .text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', {
      fill: '#FFFFFF',
    })
    .setFontSize(24);

  new MenuButton(scene, 100, 150, 'Start Game', () => {
    scene.scene.start('StartScene');
  });

  new MenuButton(scene, 100, 250, 'Settings', () => console.log('settings button clicked'));

  new MenuButton(scene, 100, 350, 'Help', () => console.log('help button clicked'));
}
