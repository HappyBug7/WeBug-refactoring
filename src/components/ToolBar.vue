<script setup>
import ToolBarItems from './ToolBarItems.vue';
const prop = defineProps(['size', 'components']);
</script>

<template>
  <div class="tool-bar-container">
    <tool-bar-items v-for="(item, index) in prop.components"
      :key="index" 
      :size="prop.size"
      :posx="20" 
      :posy="20+index*(size+20)" 
      :icon="item.icon" 
      :use_switch="item.use_switch" 
      :width_1="item.slot_width_1"
      :width_2="item.slot_width_2">
      <template v-slot:slot-1>
        <slot :class="`slot-{{index}}-1`">
          <component :is="item.component_state_1" v-bind="item.component_props_1"></component>
        </slot>
      </template>
      <template v-slot:slot-2>
        <slot :class="`slot-{{index}}-2`">
          <component :is="item.component_state_2" v-bind="item.component_props_2"></component>
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