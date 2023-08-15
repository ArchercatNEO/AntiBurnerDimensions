import { RebuyableMechanicState } from "./game-mechanics";

class OverflowUpgradeState extends RebuyableMechanicState {
  get currency() { return Currency.antimatter; }

  get boughtAmount() {
    return player.overflowRebuyables[this.id];
  }

  set boughtAmount(value) {
    player.overflowRebuyables[this.id] = value;
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


window.OverflowBaseUpgrade = OverflowBaseUpgrade;

export const OverflowScalingUpgrade = mapGameDataToObject(
  GameDatabase.overflow.scaling,
  config => (new OverflowUpgradeState(config))
);


window.OverflowScalingUpgrade = OverflowScalingUpgrade;