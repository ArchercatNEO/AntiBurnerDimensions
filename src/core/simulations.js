import { GameMechanicState } from "./game-mechanics";

class SimulationState extends GameMechanicState {

    get isQuickResettable() { return this.config.isQuickResettable; }


    // Challenge combination.
    get isRunning() {
      return player.challenge.simulation.current === this.id;
    }

    get isOnlyActiveChallenge() {
      return player.challenge.simulation.current === this.id;
    }

    get isUnlocked() { return true; }

    get isDisabled() { return false; }

    get lockedAt() {
      return GameDatabase.challenges.simulation[this.id].lockedAt;
    }

    // Change.
    requestStart() {
      if (!Tab.challenges.isUnlocked) return;
      if (GameEnd.creditsEverClosed) return;
      if (!player.options.confirmations.challenges) {
        this.start();
        return;
      }
      // This line.
      Modal.startNormalChallenge.show(this.id);
    }

    // Half done.
    start() {
      if (this.isOnlyActiveChallenge) return;
      if (!Tab.challenges.isUnlocked) return;
      // Forces big crunch reset but ensures IP gain, if any.
      bigCrunchReset(true, true);
      this.config.currentResource = 0;
      player.challenge.simulation.current = this.id;
      player.challenge.normal.current = 0;
      player.challenge.infinity.current = 0;
    }

    get isCompleted() { return (player.challenge.simulation.completedBits & (1 << this.id)) !== 0; }

    complete() {
      player.challenge.simulation.completedBits |= 1 << this.id;
      player.entropy++;
    }

    // Change.
    exit() {
      this.config.currentResource = 0;
      player.challenge.simulation.current = 0;
      bigCrunchReset(true, false);
      if (!Enslaved.isRunning) Tab.dimensions.antimatter.show();
    }

    fail() {
      this.exit();

      Modal.message.show(this.config.failText,
      { closeEvent: GAME_EVENT.REALITY_RESET_AFTER }, 1);
      EventHub.dispatch(GAME_EVENT.CHALLENGE_FAILED);
    }

    tryFail() {
      if (!this.isRunning || this.isWithinRestriction) return false;

      this.fail();
      return true;
    }

    get isWithinRestriction() { return this.config.currentResource < this.config.maximumResource; }
  }

  /**
 * @param {number} id
 * @return {SimulationState}
 */
export const Simulation = SimulationState.createAccessor(GameDatabase.challenges.simulation);

/**
 * @returns {SimulationState}
 */
Object.defineProperty(Simulation, "current", {
  get: () => (player.challenge.simulation.current > 0
    ? Simulation(player.challenge.simulation.current)
    : undefined),
});

Object.defineProperty(Simulation, "isRunning", {
  get: () => player.challenge.simulation.current !== 0,
});

export const Simulations = {
  /**
   * @type {SimulationState[]}
   */
  all: Simulation.index.compact(),
  completeAll() {
    for (const challenge of Simulations.all) challenge.complete();
  },
  clearCompletions() {
    player.challenge.simulation.completedBits = 0;
  }
};

window.Simulation = Simulation;
window.Simulations = Simulations;
