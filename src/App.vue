<script>
import HeartFast from "./components/HeartFast.vue";
import HeartSlow from "./components/HeartSlow.vue";
import Frame from "./components/Frame.vue";
import { beats } from "./utils/beats";

export default {
  components: {
    HeartFast,
    HeartSlow,
    Frame,
  },
  data() {
    return {
      frames: Array.from({ length: 100 }, () => {
        return {
          type: null,
        };
      }),
    };
  },
  mounted() {
    let index = 0;
    beats({
      action: ({ rhythmType }) => {
        const currentIndex = rhythmType === "fast" ? index : index++;
        this.frames[currentIndex].type = rhythmType;
        index++;
      },
      // repeat: 25,
    });
  },
};
</script>

<template>
  <div style="display: flex; flex-wrap: wrap">
    <Frame :key="index" v-for="(frame, index) in frames">
      <HeartFast v-if="frame.type === 'fast'" />
      <HeartSlow v-if="frame.type === 'slow'" />
    </Frame>
  </div>
</template>

<style scoped>
</style>
