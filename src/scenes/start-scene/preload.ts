import { getGameWidth, getGameHeight } from '../../helpers/helpers';
import StartScene from '.';

function loadAssets(scene: StartScene): void {
  // Load sample assets
  scene.load.image('backgroundImage', 'assets/game/background.jpg');

  scene.load.atlas('Dead', 'assets/sprites/dead.png', 'assets/dead.json');
}

export function preloadStartScene(scene: StartScene): void {
  const halfWidth = getGameWidth(scene) * 0.5;
  const halfHeight = getGameHeight(scene) * 0.5;

  const progressBarHeight = 100;
  const progressBarWidth = 400;

  const progressBarContainer = scene.add.rectangle(
    halfWidth,
    halfHeight,
    progressBarWidth,
    progressBarHeight,
    0x000000,
  );
  const progressBar = scene.add.rectangle(
    halfWidth + 20 - progressBarContainer.width * 0.5,
    halfHeight,
    10,
    progressBarHeight - 20,
    0x888888,
  );

  const loadingText = scene.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
  const percentText = scene.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
  const assetText = scene.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);

  scene.load.on('progress', (value) => {
    progressBar.width = (progressBarWidth - 30) * value;

    const percent = value * 100;
    percentText.setText(`${percent}%`);
  });

  scene.load.on('fileprogress', (file) => {
    assetText.setText(file.key);
  });

  scene.load.on('complete', () => {
    loadingText.destroy();
    percentText.destroy();
    assetText.destroy();
    progressBar.destroy();
    progressBarContainer.destroy();

    //scene.scene.start('MenuScene');
  });

  loadAssets(scene);
}
