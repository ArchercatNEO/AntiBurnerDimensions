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
      amount: 0
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

  },
  methods: {
    format,
    update() {
      this.amount = Currency.entropy.value;
    }
  }
};
</script>

<template>
  <div class="l-overflow-upgrades-grid">
    <div>
      You have {{ format(amount) }} Entropy.
    </div>
    <div
      v-for="(row, i) in grid"
      :key="i"
      class="l-overflow-upgrades-grid__row"
    >
      <OverflowUpgradeButton
        v-for="upgrade in row"
        :key="upgrade.id"
        :upgrade="upgrade"
        class="l-overflow-upgrades-grid__cell"
      />
    </div>
  </div>
</template>

<style scoped>
.l-overflow-upgrades-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.l-overflow-upgrades-grid__row {
  display: flex;
  flex-direction: row;
}

.l-overflow-upgrades-grid__cell {
  margin: 0.5rem 0.8rem;
}
</style>
