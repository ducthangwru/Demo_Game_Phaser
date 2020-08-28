import MainMenuScene from '.';
import { GAME_WIDTH } from '../../helpers/const';

export function updateMenuScene(scene: MainMenuScene): void {
  scene.cloud1.x -= 1;
  scene.cloud2.x -= 1;
  scene.cloud3.x -= 1;

  if (scene.cloud1.x <= -100) {
    scene.cloud1.x = GAME_WIDTH * 1.1;
  }

  if (scene.cloud2.x <= -200) {
    scene.cloud2.x = GAME_WIDTH * 1.2;
  }

  if (scene.cloud3.x <= -300) {
    scene.cloud3.x = GAME_WIDTH * 1.3;
  }
}
