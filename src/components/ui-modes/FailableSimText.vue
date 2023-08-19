<script>
export default {
  name: "FailableSimText",
  data() {
    return {
      currentResource: 0,
      maximumResource: 0,
    };
  },
  computed: {
    textStyle() {
      if (this.maximumResource === 0) return {};

      const ratio = this.currentResource / this.maximumResource;
      // Goes from green to yellow to red. If theme is light, use a slightly lighter yellow
      // by not allowing full red and green at the same time.
      const darkTheme = Theme.current().isDark() && Theme.current().name !== "S6";
      // Setting this constant to 2 will give green - yellow - red, setting it to 1
      // will give a straight line between green and red in colorspace, intermediate values
      // will give intermediate results.
      // The last factor in the green term darkens the text on light themes to provide better contrast
      const c = darkTheme ? 2 : 1.5;
      const rgb = [
        Math.round(Math.min(c * ratio, 1) * 255),
        Math.round(Math.min(c * (1 - ratio), 1) * 255 * (darkTheme ? 1 : 0.7)),
        0
      ];

      return { color: `rgb(${rgb.join(",")})` };
    },
    text() {
        return Simulation.current.config.display(this.currentResource, this.maximumResource);
    }
  },
  methods: {
    update() {
      if (Simulation.current) {
        this.currentResource = Simulation.current.config.currentResource;
        this.maximumResource = Simulation.current.config.maximumResource;
      }
    },
  },
};
</script>

<template>
  <span> - <span :style="textStyle">{{ text }}</span></span>
</template>

<style scoped>

</style>
