/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _45 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_45/costumes/costume1.svg", { x: 31.5, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.temp == 1) {
      this.broadcast("33to45");
    }
    if (this.stage.vars.temp == 3) {
      this.broadcast("78to45");
    }
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
  }
}
