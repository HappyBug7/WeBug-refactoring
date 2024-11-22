<script setup>
import Time from '@/components/Time.vue';
const prop = defineProps(['bg_image']);
</script>

<template>
  <div class="webug-container" :style="{backgroundImage: prop.bg_image}">
    <Time></Time>
  </div>
</template>

<style scoped>
.webug-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
