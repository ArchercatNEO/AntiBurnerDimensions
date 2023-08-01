import { SetPurchasableMechanicState } from "./game-mechanics";

class OverflowUpgradeState extends SetPurchasableMechanicState {
  get currency() { return Currency.overflowPoints; }

  get set() { return player.overflowUpgrades; }
}

export const OverflowUpgrade = mapGameDataToObject(
  GameDatabase.overflow.upgrades,
  config => new OverflowUpgradeState(config)
);