<template>
  <div class="frame">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.frame {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>