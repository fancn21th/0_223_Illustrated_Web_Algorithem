<template>
  <div class="frame">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frame {
  position: relative;
  width: 50px;
  height: 100px;
}
.text {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 50%;
  line-height: 100px;
  text-align: center;
}
</style>