import MainMenuScene from '.';

function loadAssets(scene: MainMenuScene): void {
  // Load sample assets
  scene.load.image('bg', 'assets/game/background_menu.jpg');
  scene.load.atlas('trees', 'assets/game/tree.png', 'assets/assets_tree.json');
}

export function preloadMenuScene(scene: MainMenuScene): void {
  loadAssets(scene);
}
