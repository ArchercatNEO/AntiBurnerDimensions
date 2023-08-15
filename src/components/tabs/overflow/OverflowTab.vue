<script>
import { Currency } from "../../../core/currency";

import OverflowUpgradeButton from "./../overflow/OverflowUpgradeButton";


export default {
  name: "OverflowTab",
  components: {
    OverflowUpgradeButton,
},
  data() {
    return {
      amount: new Decimal()
    };
  },
  computed: {
    grid() {
      return [
        [
          OverflowBaseUpgrade.dim1AntiBase,
          OverflowBaseUpgrade.dim2AntiBase,
          OverflowBaseUpgrade.dim3AntiBase,
          OverflowBaseUpgrade.dim4AntiBase,
        ],
        [
          OverflowBaseUpgrade.dim5AntiBase,
          OverflowBaseUpgrade.dim6AntiBase,
          OverflowBaseUpgrade.dim7AntiBase,
          OverflowBaseUpgrade.dim8AntiBase,
        ],
        [
          OverflowScalingUpgrade.dim1AntiScaling,
          OverflowScalingUpgrade.dim2AntiScaling,
          OverflowScalingUpgrade.dim3AntiScaling,
          OverflowScalingUpgrade.dim4AntiScaling,
        ],
        [
          OverflowScalingUpgrade.dim5AntiScaling,
          OverflowScalingUpgrade.dim6AntiScaling,
          OverflowScalingUpgrade.dim7AntiScaling,
          OverflowScalingUpgrade.dim8AntiScaling,
        ]
      ];
    },
    costIncreases: () => EternityUpgrade.epMult.costIncreaseThresholds.map(x => new Decimal(x))
  },
  methods: {
    formatPostBreak,
    update() {
      this.amount.copyFrom(Currency.overflowPoints);
    }
  }
};
</script>

<template>
  <div class="l-eternity-upgrades-grid">
    <div
      v-for="(row, i) in grid"
      :key="i"
      class="l-eternity-upgrades-grid__row"
    >
      <OverflowUpgradeButton
        v-for="upgrade in row"
        :key="upgrade.id"
        :upgrade="upgrade"
        class="l-eternity-upgrades-grid__cell"
      />
    </div>
    <div>
      You have {{ formatPostBreak(amount) }} Overflow Points.
    </div>
  </div>
</template>

<style scoped>
.l-eternity-upgrades-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.l-eternity-upgrades-grid__row {
  display: flex;
  flex-direction: row;
}

.l-eternity-upgrades-grid__cell {
  margin: 0.5rem 0.8rem;
}
</style>
