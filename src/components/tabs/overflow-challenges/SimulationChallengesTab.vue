<script>
import { Simulations } from "../../../core/simulations";

import ChallengeGrid from "@/components/ChallengeGrid";
import ChallengeTabHeader from "@/components/ChallengeTabHeader";
import SimulationBox from "./SimulationBox";

export default {
  name: "SimulationChallengesTab",
  components: {
    ChallengeGrid,
    ChallengeTabHeader,
    SimulationBox
  },
  data() {
    return {
      showAllChallenges: true
    };
  },
  computed: {
    challenges() {
      return Simulations.all;
    },

  },
  methods: {
    update() {
      this.showAllChallenges = player.options.showAllChallenges;
    },
    isChallengeVisible(challenge) {
      return challenge.isUnlocked || (this.showAllChallenges);
    }
  }
};
</script>

<template>
  <div class="l-challenges-tab">
    <ChallengeTabHeader />
    <div>
      Each completed simulation awards 1 entropy. <br>
      Dimboost to complete a simulation.
    </div>
    <ChallengeGrid
      v-slot="{ challenge }"
      :challenges="challenges"
      :is-challenge-visible="isChallengeVisible"
    >
      <SimulationBox :challenge="challenge" />
    </ChallengeGrid>
  </div>
</template>

<style scoped>

</style>
