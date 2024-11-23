<script setup>
import VueDraggableResizable from 'vue-draggable-resizable';
import {ref} from 'vue';
import 'boxicons';
const prop = defineProps(['icon', 'icon_color', 'size', 'posx', 'posy', 'use_switch', 'slot_width']);
const isOpen = ref(false);
const filterDisplay = ref('none');
const view = ref(true);
</script>

<template>
  <div class="tool-bar-item-container" :style="{width: size+'px', height: size+'px', top: posy+'px', left: posx+'px', color: icon_color}">
    <i :class=prop.icon id="icon"  @click="() => {isOpen = !isOpen}" @mouseover="() => {if (isOpen) filterDisplay = 'block'}" :style="{width: size+'px', height: size+'px', fontSize: size+'px', color: icon_color}"></i>
    <div id="filter" :style="{display: filterDisplay, width: size+'px', height: size+'px'}" @mouseleave="() => {filterDisplay = 'none'}" @click="() => {isOpen = !isOpen}">
      <i class='bx bx-x' id="X" :style="{fontSize: size+'px'}"></i>
    </div>
  </div>
  <div class="draggable-container" v-show="isOpen">
    <vue-draggable-resizable :parent="false">
      <div class="slot-container" :style="{width: prop.slot_width}">
        <div class="control-buttons">
          <div class="close-button">
            <i class='bx bx-x' @click="() => {isOpen = !isOpen}"></i>
          </div>
          <div class="switch-button"  @click="() => {view = !view}" v-show="prop.use_switch">
            <div class="dot" :style="{backgroundColor: view ? 'whitesmoke' : 'rgb(120, 120, 120)'}"></div>
            <div class="dot" :style="{backgroundColor: !view ? 'whitesmoke' : 'rgb(120, 120, 120)'}"></div>
          </div>
        </div>
        <div class="slot-1-container" v-if="view">
          <slot name="slot-1">
            <div class="place-holder-div">
              <p class="place-holder-p"> Where's the content? </p>
              <img src="/slime.gif" alt="A slime pic acturally" class="place-holder-img">
            </div>
          </slot>
        </div>
        <div class="slot-2-container" v-if="!view">
          <slot name="slot-2">
            <div class="place-holder-div">
              <p class="place-holder-p"> I can switch too! </p>
              <img src="/HappyBug.gif" alt="A HappyBug pic acturally" class="place-holder-img">
            </div>
          </slot>
        </div>
      </div>
    </vue-draggable-resizable>
  </div>
</template>

<style scoped>
* {
  user-select: none;
  font-family: 'comic sans ms';
}

/* icon style */

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

/* filter control */

#filter {
  position: absolute;
  left: 0;
  top: 0;
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

/* slot declearation */

.slot-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
}

.control-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.close-button {
  width: 16px;
  height: 16px;
  font-size: 15px;
  color: #d1f5ff;
  border-radius: 50%;
  line-height: 16px;
  background-color: transparent;
}

.close-button:hover {
  color: rgb(255, 94, 94);
  box-shadow: 2px 2px 14px 1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.switch-button {
  width: 25px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
}

.switch-button:hover{
  box-shadow: 2px 2px 14px 1px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.dot{
  background-color: whitesmoke;
  border-radius: 50%;
  height: 6px;
  width: 6px;
  margin: auto;
}

/* place holder */

.place-holder-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.place-holder-p {
  color: #d1f5ff;
  font-size: 30px;
  width: 400px;
  text-align: center;
}

.place-holder-img {
  width: 200px;
  height: 200px;
}
</style>