<template>
  <aside class="hint">
    <span class="penant"></span>
    <div class="inside">
      <header v-if="title" v-html="title" />
      <p v-if="desc" v-html="desc" />
    </div>
  </aside>
</template>
<script setup>
let { title, desc } = defineProps(['title', 'desc']);
const { hintBG, headBG } = useRuntimeConfig().public.hints;
</script>
<style lang="scss" scoped>
.hint {
  pointer-events: none;
  font-family: sans-serif;
  top: calc(100% + 0.5rem);
  position: absolute;
  z-index: 99999;
  display: none;
  padding: 0;
  min-width: 10rem;
  transform: translateX(-2rem);
  .inside {
    border-radius: 0.25rem;
    overflow: hidden;
  }
  p {
    margin: 0;
    padding: 0.8rem;
    font-size: 0.8rem;
    background: v-bind(hintBG);
  }
  .penant {
    width: 1rem;
    height: 0.5rem;
    display: block;
    position: absolute;
    top: -0.5rem;
    overflow: hidden;
    left: 2rem;

    &:before {
      content: ' ';
      width: 0.8rem;
      height: 2rem;
      display: block;
      background: v-bind(headBG);
      position: absolute;
      transform: rotate(-45deg);
      left: 0.5rem;
    }
  }
  header {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    background: v-bind(headBG);
    padding: 0.4rem;
  }
}
</style>
