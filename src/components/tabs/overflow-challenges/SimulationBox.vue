<script>
import ChallengeBox from "@/components/ChallengeBox";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";

export default {
    name: "SimulationBox",
    components: {
        ChallengeBox,
        DescriptionDisplay,
        EffectDisplay
    },
    props: {
        challenge: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isUnlocked: false,
            isRunning: false,
            isCompleted: false,
        };
    },
    computed: {
        config() {
            return this.challenge.config;
        },
        name() {
        return `Simulation ${this.challenge.id}`;
        }
    },
    methods: {
        update() {
        const challenge = this.challenge;
        this.isUnlocked = challenge.isUnlocked;
        this.isRunning = challenge.isRunning;
        this.isCompleted = challenge.isCompleted;
        }
  }
};
</script>

<template>
  <ChallengeBox
    :name="name"
    :is-unlocked="isUnlocked"
    :is-running="isRunning"
    :is-completed="isCompleted"
    class="c-challenge-box--infinity"
    @start="challenge.requestStart()"
  >
    <template #top>
      <DescriptionDisplay :config="config" />
      <EffectDisplay
        v-if="isRunning"
        :config="config"
      />
    </template>
  </ChallengeBox>
</template>

<style scoped>


</style>