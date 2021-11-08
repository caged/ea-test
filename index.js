import {
  ElementaryWebAudioRenderer as core,
  el,
} from "@nick-thompson/elementary";

const ctx = new (window.AudioContext || window.webkitAudioContext)();

core.on("load", () => {
  core.render(el.cycle(440), el.cycle(441));
});

(async function main() {
  let node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });
  node.connect(ctx.destination);
})();
