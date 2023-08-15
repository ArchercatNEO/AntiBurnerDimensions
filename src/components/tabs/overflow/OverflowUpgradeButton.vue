<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";

export default {
  name: "OverflowUpgradeButton",
  components: {
    DescriptionDisplay,
    EffectDisplay,
    CostDisplay
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMaxed: false,
      isAffordable: false,
    };
  },
  computed: {
    classObject() {
      return {
        "o-overflow-upgrade": true,
        "o-overflow-upgrade--maxed": this.isMaxed,
        "o-overflow-upgrade--available": !this.isMaxed && this.isAffordable,
        "o-overflow-upgrade--unavailable": !this.isMaxed && !this.isAffordable
      };
    },
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.isMaxed = upgrade.isMaxed;
      this.isAffordable = upgrade.isAffordable;
    }
  }
};
</script>

<template>
  <button
    :class="classObject"
    @click="upgrade.purchase()"
  >
    <DescriptionDisplay :config="upgrade.config" />
    <EffectDisplay
      br
      :config="upgrade.config"
    />
    <CostDisplay
      v-if="!isMaxed"
      br
      :config="upgrade.config"
      name="Overflow Point"
    />
  </button>
</template>

<style scoped>

</style>
