<script setup>
import ToolBarItems from './ToolBarItems.vue';
const prop = defineProps(['size', 'components']);
</script>

<template>
  <div class="tool-bar-container">
    <tool-bar-items v-for="index in Array.from({length: prop.components.length}, (_, i) => i)"
      :key="index" 
      :size="prop.size" 
      :posx="20" 
      :posy="20+index*(size+20)" 
      :icon="prop.components[index].icon" 
      :use_switch="prop.components[index].use_switch" 
      :width="prop.components[index].slot_width">
      <template v-slot:slot-1>
        <slot :class="`slot-{{index}}-1`">
          <component :is="prop.components[index].component_state_1" v-bind="prop.components[index].component_props_1"></component>
        </slot>
      </template>
      <template v-slot:slot-2>
        <slot :class="`slot-{{index}}-2`">
          <component :is="prop.components[index].component_state_2" v-bind="prop.components[index].component_props_2"></component>
        </slot>
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