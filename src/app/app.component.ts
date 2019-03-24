import { GameplayService } from './gameplay.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 working with Phaser JS';

  public readonly gameConfig: GameConfig = {
    title: 'Game Title',
    version: '1.0',
    type: Phaser.AUTO,
    width: 640,
    height: 480
  };

  public constructor(public mainScene: GameplayService) { }

  public onGameReady(game: Phaser.Game): void {
    game.scene.add('Scene', this.mainScene, true);
  }

}
