<script setup>
import Time from '@/components/Time.vue';
import ToolBarItems from '@/components/ToolBarItems.vue';
import ToolBar from '@/components/ToolBar.vue';
const prop = defineProps(['bg_image']);
const size = 50;
const elements = [
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width: '200px'
  },
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width: '200px'
  }
]
</script>

<template>
  <div class="webug-container" :style="{backgroundImage: `url(${bg_image})`}">
    <Time :color='`#CDFBE4`'></Time>
    <!-- <tool-bar-items :size="100" :icon='`bx bx-x`' :posx='100' :posy='100' :icon_color='`#cdfbe4`' :use_switch='true'></tool-bar-items> -->
    <tool-bar 
    :item_num="elements.length" 
    :icons="elements.map(el => el.icon)" 
    :size="size" 
    :use_switchs="elements.map(el => el.use_switch)"
    :slot_widths="elements.map(el => el.slot_width)" ></tool-bar>
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
