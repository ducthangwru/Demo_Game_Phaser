import StartScene from '.';

export function updateStartScene(scene: StartScene): void {
  // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
  const velocity = new Phaser.Math.Vector2(0, 0);

  if (scene.cursorKeys.left.isDown) {
    velocity.x -= 1;
  }
  if (scene.cursorKeys.right.isDown) {
    velocity.x += 1;
  }
  if (scene.cursorKeys.up.isDown) {
    velocity.y -= 1;
  }
  if (scene.cursorKeys.down.isDown) {
    velocity.y += 1;
  }

  // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
  const normalizedVelocity = velocity.normalize();
  scene.image.setVelocity(normalizedVelocity.x * scene.speed, normalizedVelocity.y * scene.speed);
}
