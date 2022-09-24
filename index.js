import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _33 from "./_33/_33.js";
import _45 from "./_45/_45.js";
import _78 from "./_78/_78.js";
import Ntsc from "./Ntsc/Ntsc.js";
import Pal from "./Pal/Pal.js";
import Reset from "./Reset/Reset.js";
import Add from "./Add/Add.js";
import Next from "./Next/Next.js";
import Prev from "./Prev/Prev.js";
import Set from "./Set/Set.js";
import Rewind from "./Rewind/Rewind.js";
import Song from "./Song/Song.js";
import Up from "./Up/Up.js";
import Down from "./Down/Down.js";
import Down2 from "./Down2/Down2.js";
import _440 from "./_440/_440.js";
import W2 from "./W2/W2.js";
import W from "./W/W.js";
import Loop from "./Loop/Loop.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _33: new _33({
    x: -120,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  _45: new _45({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  _78: new _78({
    x: 120,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  }),
  Ntsc: new Ntsc({
    x: -120,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Pal: new Pal({
    x: 120,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Reset: new Reset({
    x: 60,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  }),
  Add: new Add({
    x: -60,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Next: new Next({
    x: 200,
    y: -144,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Prev: new Prev({
    x: -200,
    y: -144,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Set: new Set({
    x: 60,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Rewind: new Rewind({
    x: 0,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Song: new Song({
    x: -60,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Up: new Up({
    x: 160,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Down: new Down({
    x: -160,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  Down2: new Down2({
    x: -60,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  _440: new _440({
    x: 60,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  W2: new W2({
    x: -180,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  W: new W({
    x: 180,
    y: -45,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  Loop: new Loop({
    x: 0,
    y: 120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 19
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
