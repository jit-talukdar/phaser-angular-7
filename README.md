# Phaser with Angular 7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.
> An working playground demo with Phaser, Angular 7 and Phaser Component Library.

## Requirements
- Phaser
- [Phaser Component Library](https://github.com/TristanBonsor/phaser-component-library)

## Installation & Integration

1. Create an Angular 7 Project using angular cli. 
```bash
$ ng new phaserangular
```
2. Now open the newly created project on your IDE.
3. Go to package.json and add this below lines within script object and save the file.
```json
"phaser-typings": "curl -o src/phaser.d.ts https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts",
"postinstall": "npm run phaser-typings"
```
4. Now install the dependency modules and add Phaser and Phaser component library. Type this below lines from your terminal
```bash
$ npm install
$ npm install phaser
$ npm install phaser-component-library
```

5. Open angular.json and add phaser.js file in the script section.
```json
"scripts": [
  "node_modules/phaser/dist/phaser.js"
],
```

6. Now import the phaser module in your App module.
```typescript
import { PhaserModule } from 'phaser-component-library';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhaserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


7. In your tsconfig.json File add "scripthost" in lib array otherwise ActiveXObject error will encounter.

8. Now generate a service to add a game scene. But make sure to inherit Phaser.Scene otherwise your app won't compile. Like
```typescript
export class GameplayService extends Phaser.Scene {
}
```
9. Add the phaser component in your html.
``` html
<phaser-component [gameConfig]="gameConfig" (gameReady)="onGameReady($event)"></phaser-component>
```
10. Initiate the game from your component.ts. For an example I am using app.component.ts.
```typescript
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
```
Thanks to <a href="https://tristanbonsor.github.io/" target="_blank">Tristan Bonsor</a> for an awesome Phaser Component Library
