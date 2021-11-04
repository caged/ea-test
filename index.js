import {
  ElementaryWebAudioRenderer as core,
  sugar,
  el,
} from "@nick-thompson/elementary";
import supersaw from "./supersaw";

const ctx = new (window.AudioContext || window.webkitAudioContext)();

core.on("load", function () {
  // core.render(el.cycle(440), el.cycle(441));
  const out = sugar(supersaw, {
    voices: 6,
    spread: 10,
    frequency: 400,
  });
  core.render(out, out);
});

(async function main() {
  let node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });
  node.connect(ctx.destination);
})();
