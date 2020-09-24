import StartScene from '.';
import { GAME_WIDTH, GAME_HEIGHT } from '../../helpers/const';

export function createStartScene(scene: StartScene): void {
  scene.background = scene.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'backgroundImage');
  scene.background.displayHeight = GAME_HEIGHT;
  scene.background.displayWidth = GAME_WIDTH;

  scene.comeback = scene.add.image(100, 100, 'Menu', 'IconHome.png');
  scene.comeback.setInteractive();
  // Add a player sprite that can be moved around. Place him in the middle of the screen.
  scene.anims.create({
    key: 'Dead',
    frames: scene.anims.generateFrameNames('Dead'),
    duration: 2000,
    repeat: -1,
  });

  scene.image = scene.physics.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT - 200, 'Dead');
  scene.image = scene.image.setScale(0.5).play('Dead');

  // This is a nice helper Phaser provides to create listeners for some of the most common keys.
  // scene.cursorKeys = scene.input.keyboard.createCursorKeys();

  scene.image = scene.image.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

  scene.input.setDraggable(scene.image.setInteractive());

  scene.input.on('dragstart', function (pointer, obj) {
    obj.body.moves = false;
  });

  scene.input.on('drag', function (pointer, obj, dragX, dragY) {
    // console.log(obj.x + obj.width / 2);
    // console.log(GAME_WIDTH);
    // if (obj.x + obj.width / 2 >= GAME_WIDTH) {
    //   obj.setPosition(GAME_WIDTH - obj.width / 2, dragY);
    // } else {
    //   obj.setPosition(dragX, dragY);
    // }

    obj.setPosition(dragX, dragY);
  });

  scene.input.on('dragend', function (pointer, obj) {
    obj.body.moves = true;
  });
}
