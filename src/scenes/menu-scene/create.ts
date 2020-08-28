import { MenuButton } from '../../ui/menu-button';
import MainMenuScene from '.';
import { GAME_WIDTH, GAME_HEIGHT } from '../../helpers/const';

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export function createMenuScene(scene: MainMenuScene): void {
  // scene.timeEvent = scene.time.addEvent({ delay: 100, callbackScope: this, loop: true });

  scene.background = scene.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'bg');
  scene.background.displayHeight = GAME_HEIGHT;
  scene.background.displayWidth = GAME_WIDTH;

  scene.cloud1 = scene.add.image(GAME_WIDTH * 1.1, GAME_HEIGHT / 6, 'trees', 'Cloud_Small_Left.png');
  scene.cloud2 = scene.add.image(GAME_WIDTH * 1.2, GAME_HEIGHT / 4, 'trees', 'Cloud_Small_Right.png');
  scene.cloud3 = scene.add.image(GAME_WIDTH * 1.3, GAME_HEIGHT / 2, 'trees', 'Cloud_Big_Right.png');

  scene.text = scene.add
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
