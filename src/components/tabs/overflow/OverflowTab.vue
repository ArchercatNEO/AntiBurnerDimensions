<script>
import { Currency } from "../../../core/currency";

import { OverflowUpgrade } from "../../../core/overflow";

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
          OverflowUpgrade.epMult
        ],
        [
          OverflowUpgrade.nt
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
