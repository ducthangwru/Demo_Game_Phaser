import StartScene from '.';

export function updateStartScene(scene: StartScene): void {
  // Every frame, we create a new velocity for the sprite based on what keys the player is holding down.
  const velocity = new Phaser.Math.Vector2(0, 0);

  if (scene.getCursorKey().left.isDown) {
    velocity.x -= 1;
  }
  if (scene.getCursorKey().right.isDown) {
    velocity.x += 1;
  }
  if (scene.getCursorKey().up.isDown) {
    velocity.y -= 1;
  }
  if (scene.getCursorKey().down.isDown) {
    velocity.y += 1;
  }

  // We normalize the velocity so that the player is always moving at the same speed, regardless of direction.
  const normalizedVelocity = velocity.normalize();
  scene.getImage().setVelocity(normalizedVelocity.x * scene.speed, normalizedVelocity.y * scene.speed);
}
