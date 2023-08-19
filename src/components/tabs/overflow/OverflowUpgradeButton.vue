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
      isCapped: false,
      isAffordable: false,
    };
  },
  computed: {
    classObject() {
      return {
        "o-overflow-upgrade": true,
        "o-overflow-upgrade--maxed": this.isCapped,
        "o-overflow-upgrade--available": !this.isCapped && this.isAffordable,
        "o-overflow-upgrade--unavailable": !this.isCapped && !this.isAffordable
      };
    },
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.isCapped = upgrade.isCapped;
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
      v-if="!isCapped"
      br
      :config="upgrade.config"
      name="Entropy"
    />
  </button>
</template>

<style scoped>

</style>
