<script>
import HeartFast from "./components/HeartFast.vue";
import HeartSlow from "./components/HeartSlow.vue";
import Frame from "./components/Frame.vue";

export default {
  components: {
    HeartFast,
    HeartSlow,
    Frame,
  },
  data() {
    return {
      frames: Array.from({ length: 10 }, () => {
        return Math.random() >= 0.5 ? "fast" : "slow";
      }),
    };
  },
};
</script>

<template>
  <div style="display: flex; flex-wrap: wrap">
    <Frame :key="index" v-for="(frame, index) in frames">
      <HeartFast v-if="frame === 'fast'" />
      <HeartSlow v-if="frame === 'slow'" />
    </Frame>
  </div>
</template>

<style scoped>
</style>
