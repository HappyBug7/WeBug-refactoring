<script setup>
import Time from '@/components/Time.vue';
import ToolBar from '@/components/ToolBar.vue';
import search from '@/components/search.vue';
const prop = defineProps(['bg_image']);
const size = 50;
const elements = [
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width: 200,
    component_state_1: Time,
    component_state_2: Time,
    component_props_1: {color: '#CDFBE4'},
    component_props_2: {color: 'red'}
  },
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width: 200,
    component_state_1: Time,
    component_state_2: Time,
    component_props_1: {color: '#CDFBE4'},
    component_props_2: {color: 'red'}
  }
]
</script>

<template>
  <div class="webug-container" :style="{backgroundImage: `url(${bg_image})`}">
    <Time :color='`#CDFBE4`'></Time>
    <tool-bar :components="elements" :size="size"></tool-bar>
    <search></search>
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
  background-size: 100vw 100vh;
}
</style>
