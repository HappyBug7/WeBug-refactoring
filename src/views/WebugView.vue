<script setup>
import Time from '@/components/Time.vue';
import ToolBar from '@/components/ToolBar.vue';
import Search from '@/components/Search.vue';
import ShortCutItem from '@/components/ShortCutItem.vue';
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
    // component_state_1: Time,
    // component_state_2: Time,
    // component_props_1: {color: '#CDFBE4'},
    // component_props_2: {color: 'red'}
  }
]
</script>

<template>
  <div class="webug-container" :style="{backgroundImage: `url(${bg_image})`}">
    <Time class="webug-time" :color='`#CDFBE4`'></Time>
    <tool-bar :components="elements" :size="size"></tool-bar>
    <Search class="webug-search" :search_color='`#c4f3c4`' :search_foucs_bg_color="`#86ffc264`"></Search>
    <ShortCutItem :item_name="`im testing!!!`" :img_url="`/bg_bench.jpg`" :max_len="10" :font_color="`#CDFBE4`"></ShortCutItem>
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

.webug-time {
  position: absolute;
  top: 20%
}

.webug-search {
  position: absolute;
  top: 30%;
}
</style>
