<script>

import InfinityUpgradeButton from "@/components/InfinityUpgradeButton";

export default {
    name: "OverflowTab",
    components: {
        InfinityUpgradeButton
    },
    
    data() {
        return {isUnlocked: true}
    },

    computed: {
        grid() {
            return [
        [
          InfinityUpgrade.totalTimeMult,
          InfinityUpgrade.dim18mult,
          InfinityUpgrade.dim36mult,
          InfinityUpgrade.resetBoost
        ],
        [
          InfinityUpgrade.buy10Mult,
          InfinityUpgrade.dim27mult,
          InfinityUpgrade.dim45mult,
          InfinityUpgrade.galaxyBoost
        ],
        [
          InfinityUpgrade.thisInfinityTimeMult,
          InfinityUpgrade.unspentIPMult,
          InfinityUpgrade.dimboostMult,
          InfinityUpgrade.ipGen
        ],
        [
          InfinityUpgrade.skipReset1,
          InfinityUpgrade.skipReset2,
          InfinityUpgrade.skipReset3,
          InfinityUpgrade.skipResetGalaxy
        ]
      ];
        },
    },

    methods: {
        
        update() {this.isUnlocked = Autobuyer.bigCrunch.hasMaxedInterval;},
        
        btnClassObject(column) {
            return {
                "l-infinity-upgrade-grid__cell": true,
                "o-infinity-upgrade-btn--multiplier": column === 3
            };
        },
        
        timeDisplayShort: (time) =>  timeDisplayShort(time)

        
  }

};
</script>

<template>

</template>

<style scoped>

</style>