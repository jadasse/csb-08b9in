/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class W extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./W/costumes/costume1.svg", { x: 31.5, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.wacky2 += 1;
    this.broadcast("wacky2");
  }

  *whenGreenFlagClicked() {
    this.goto(180, -45);
    while (true) {
      if (this.stage.vars.wacky == 1) {
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      yield;
    }
  }
}
