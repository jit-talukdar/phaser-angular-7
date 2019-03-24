import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameplayService extends Phaser.Scene {
  /**
   * Instantiate scene service
   */
  public constructor() {
    super({ key: 'Scene' });
  }

  /**
   * Scene creation handler.
   */
  public create(): void {
    this.cameras.main.startFollow(this.add.text(0, 0, 'Hello there! I am Phaser working with Angular 7').setOrigin(0.5), false);
  }

}
