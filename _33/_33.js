/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _33 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_33/costumes/costume1.svg", { x: 31.5, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.temp == 2) {
      this.broadcast("45to33");
    }
    if (this.stage.vars.temp == 3) {
      this.broadcast("78to33");
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-120, 0);
  }
}
