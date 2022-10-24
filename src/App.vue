<script>
import HeartFast from "./components/HeartFast.vue";
import HeartSlow from "./components/HeartSlow.vue";
import Frame from "./components/Frame.vue";
import { beats } from "./utils/beats";
import { debounce } from "./utils/debounce";

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
          text: "",
        };
      }),
    };
  },
  methods: {
    print(currentIndex) {
      this.frames[currentIndex].text = new Date().getSeconds();
    },
  },
  mounted() {
    let index = 0;

    const debouncedPrint = debounce(this.print);

    beats({
      // 每个节拍不管快慢都会执行
      action: ({ rhythmType }) => {
        const currentIndex = rhythmType === "fast" ? index : index++;
        this.frames[currentIndex].type = rhythmType;
        debouncedPrint(currentIndex);
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
      <template v-slot:content>
        <HeartFast v-if="frame.type === 'fast'" />
        <HeartSlow v-if="frame.type === 'slow'" />
      </template>
      <template v-slot:text>
        <span>{{ frame.text }}</span>
      </template>
    </Frame>
  </div>
</template>

<style scoped>
</style>
