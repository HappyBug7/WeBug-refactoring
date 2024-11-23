<script setup>
import ToolBarItems from './ToolBarItems.vue';
const prop = defineProps(['item_num', 'size', 'icons', 'use_switchs', 'slot_widths']);
</script>

<template>
  <div class="tool-bar-container">
    <tool-bar-items v-for="index in Array.from({length: prop.item_num}, (_, i) => i)" 
      :key="index" 
      :size="prop.size" 
      :posx="20" 
      :posy="20+index*(size+20)" 
      :icon="prop.icons[index]" 
      :use_switch="prop.use_switchs[index]" 
      :slot_width="prop.slot_widths[index]">
      <template v-slot:slot-1>
        <slot :class="`slot-{{index}}-1`"></slot>
      </template>
      <template v-slot:slot-2>
        <slot :class="`slot-{{index}}-2`"></slot>
      </template>
    </tool-bar-items>
  </div>
</template>

<style scoped>
.tool-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
}
</style>