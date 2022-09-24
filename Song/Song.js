/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Song extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Song/costumes/costume1.svg", {
        x: 31.50000000000003,
        y: 26
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("choose a song:");
    if (this.answer > 0 && this.answer < 14) {
      this.stage.vars.undefined = this.answer;
      this.broadcast("play");
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-60, 75);
  }

  *whenKeySPressed() {
    yield* this.askAndWait("choose a song:");
    if (this.answer > 0 && this.answer < 14) {
      this.stage.vars.undefined = this.answer;
      this.broadcast("play");
    }
  }
}
