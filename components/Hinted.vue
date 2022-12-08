<template>
  <span class="hinted">
    <ToolTip :title="title" :desc="desc" />
    <slot>
      {{ symbol }}
    </slot>
  </span>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
let props = defineProps(['title', 'desc', 'type']);

let title = props.type
  ? runtimeConfig.public.hints.types[props.type]['title']
  : props?.title;

let desc = props.type
  ? runtimeConfig.public.hints.types[props.type]['desc']
  : props?.desc;

let symbol = props.type
  ? runtimeConfig.public.hints.types[props.type]['symbol']
  : '???';
</script>
<style lang="scss">
.hinted {
  position: relative;
  cursor: default;
  &:hover {
    .hint {
      display: block !important;
    }
  }
}
</style>
