import { RebuyableMechanicState } from "./game-mechanics";

class OverflowUpgradeState extends RebuyableMechanicState {
  get currency() { return Currency.entropy; }

  get boughtAmount() {
    return player.entropyRebuyables[this.id];
  }

  set boughtAmount(value) {
    player.entropyRebuyables[this.id] = value;
  }

  get isCapped() {
    return this.boughtAmount === this.config.maxUpgrades;
  }

  onPurchased() {
    this.config.onPurchased?.();
  }
}

export const OverflowBaseUpgrade = mapGameDataToObject(
  GameDatabase.overflow.base,
  config => (new OverflowUpgradeState(config))
);

export const OverflowScalingUpgrade = mapGameDataToObject(
  GameDatabase.overflow.scaling,
  config => (new OverflowUpgradeState(config))
  );

window.OverflowBaseUpgrade = OverflowBaseUpgrade;
window.OverflowScalingUpgrade = OverflowScalingUpgrade;