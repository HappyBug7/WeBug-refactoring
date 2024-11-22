<script setup>
import Time from '@/components/Time.vue';
import ToolBarItems from '@/components/ToolBarItems.vue';
const prop = defineProps(['bg_image']);
</script>

<template>
  <div class="webug-container" :style="{backgroundImage: `url(${bg_image})`}">
    <Time :color='`#CDFBE4`'></Time>
    <tool-bar-items :size="100" :icon='`bx bx-x`' :posx='100' :posy='100' :icon_color='`#cdfbe4`'></tool-bar-items>
  </div>
</template>

<style scoped>
.webug-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
