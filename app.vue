<template>
  <div>
    <ul>
      <li>
        <Hinted title="Boo!" desc="I'm a spoopy ghost!">👻</Hinted> Item #1
      </li>
      <li><Hinted type="zap">⚡️</Hinted> Item #2</li>
      <li><Hinted type="explode" /> Item #3</li>
    </ul>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
</script>
<style>
ul {
  font-size: 1.2rem;
}
</style>
