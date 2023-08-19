function rebuyable(config) {

    const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased, costX, isBase } = config;
    const begin = isBase ? "Base is " : "x";

    return {
      rebuyable: true,
      id,
      cost: () => config.initialCost * Math.pow(config.costIncrease, player.entropyRebuyables[config.id]),
      maxUpgrades,
      description,
      effect: () => 10 ** player.entropyRebuyables[config.id],
      isDisabled,
      // There isn't enough room in the button to fit the EC reduction and "Next:" at the same time while still
      // presenting all the information in an understandable way, so we only show it if the upgrade is maxed
      formatCost: value => format(value, 2, 0),
      formatEffect: value => (Math.log10(value) === config.maxUpgrades
      ? `Currently: ${begin + format(costX / value)}`
      : `Currently: ${begin + format(costX / value)} | Next: ${format(costX / (value * 10))}`),
      noLabel,
      onPurchased
    };
  }

const BASE_COSTS = [null, 10, 100, 1e4, 1e6, 1e9, 1e13, 1e18, 1e24];
const BASE_COST_MULTIPLIERS = [null, 1e3, 1e4, 1e5, 1e6, 1e8, 1e10, 1e12, 1e15];

export const overflowBaseUpgrades = {};
export const overflowScalingUpgrades = {};

for (let i = 1; i < 9; i++) {
    overflowBaseUpgrades[`dim${i}AntiBase`] = rebuyable({
        id: i,
        isBase: true,
        maxUpgrades: Math.log10(BASE_COSTS[i]),
        initialCost: 1,
        costIncrease: 1,
        costX: BASE_COSTS[i],
        description: () => `Divide Dim ${i} base cost by 10x per level`,
        noLabel: true,
        // eslint-disable-next-line no-loop-func
        onPurchased: () => GameCache.antimatterAntiBase.invalidate()
    });
}

for (let i = 1; i < 9; i++) {
    overflowScalingUpgrades[`dim${i}AntiScaling`] = rebuyable({
        id: i + 8,
        isBase: false,
        maxUpgrades: Math.log10(BASE_COST_MULTIPLIERS[i]) - 1,
        initialCost: 1,
        costIncrease: 1,
        costX: BASE_COST_MULTIPLIERS[i],
        description: () => `Divide Dim ${i} exponential scaling by 10x per level`,
        noLabel: true,
        // eslint-disable-next-line no-loop-func
        onPurchased: () => GameCache.antimatterAntiScaling.invalidate()
    });
}
