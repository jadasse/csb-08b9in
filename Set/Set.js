/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Set extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Set/costumes/costume1.svg", {
        x: 31.50000000000003,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "f" }, this.whenKeyFPressed)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("set fixed speed");
    if (this.answer > -361 && this.answer < 361) {
      this.stage.vars.speed = this.answer;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(60, 150);
  }

  *whenKeyFPressed() {
    yield* this.askAndWait("set fixed speed");
    if (this.answer > -361 && this.answer < 361) {
      this.stage.vars.speed = this.answer;
    }
  }
}
