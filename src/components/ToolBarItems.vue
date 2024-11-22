<script setup>
import VueDraggableResizable from 'vue-draggable-resizable';
import {ref} from 'vue';
import 'boxicons';
const prop = defineProps(['icon', 'icon_color', 'size', 'posx', 'posy']);
const isOpen = ref(false);
const filterDisplay = ref('none');

</script>

<template>
  <div class="tool-bar-item-container" :style="{width: size+'px', height: size+'px', top: posx='px', left: posy+'px', color: icon_color}">
    <i :class=prop.icon id="icon"  @click="() => {isOpen = !isOpen}" @mouseover="() => {if (isOpen) filterDisplay = 'block'}" :style="{width: size+'px', height: size+'px', fontSize: size+'px', color: icon_color}"></i>
  </div>
  <div id="filter" :style="{display: filterDisplay, width: size+'px', height: size+'px', top: posx='px', left: posy+'px'}" @mouseleave="() => {filterDisplay = 'none'}" @click="() => {isOpen = !isOpen}">
    <i class='bx bx-x' id="X" :style="{fontSize: size+'px'}"></i>
  </div>
  <div class="draggable-container" v-show="isOpen">
    <vue-draggable-resizable :parent="false">
      <slot>
        content?
      </slot>
    </vue-draggable-resizable>
  </div>
</template>

<style scoped>
* {
  user-select: none;
}

.tool-bar-item-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 2px 2px 14px 1px rgba(00,00,00,0.2);
  background-color: #fff5f39d;
  translate: all 1s;
}

.tool-bar-item-container:hover {
  transform: scale(1.1);
  box-shadow: none;
  cursor: pointer;
}

.draggable-container {
  position: absolute;
  width: 0;
  height: 0;
}

#filter {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.389);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#X {
  margin: auto;
}
</style>