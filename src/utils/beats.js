const fast = 0.5;
const slow = 1;
export function beats({
  rhythm = [fast, fast, fast, fast, slow, slow, slow, slow],
  action = () => {},
  repeat = 2,
  rhythmTick = 1000,
}) {
  let beatsCount = rhythm.length * repeat,
    currentBeat = 0,
    rhythmIndex = 0;

  function nextBeat() {
    if (currentBeat === beatsCount) {
      console.log("beats is done");
      return;
    }

    currentBeat++;

    if (rhythmIndex === rhythm.length) {
      rhythmIndex = 0;
    }

    console.log("heart is beating ...");

    const currentRhythm = rhythm[rhythmIndex];
    const rhythmType = currentRhythm === fast ? "fast" : "slow";

    action({ rhythmType, currentBeat });

    setTimeout(nextBeat, rhythm[rhythmIndex++] * rhythmTick);
  }

  nextBeat();
}

function tick() {
  console.log(new Date().getSeconds());
}
