<script setup>
import { ref } from 'vue';
import axios from 'axios';
import UpdateShortCutItem from './UpdateShortCutItem.vue';
const prop = defineProps(['short_cut_items']);

function nameDisplay(name, maxlen) {
  let length = 0;
  let idx = 0;
  const pattern = /[\u4e00-\u9fa5]/g;
  for (idx = 0; length < maxlen; idx++) {
    if (pattern.test(name[idx])) {
      length += 2;
    } else {
      length += 1;
    } 
  }
  return name.substring(0, idx) + "...";
}
</script>

<template>
  <div class="container">
    <update-short-cut-item v-for="(item, index) in prop.short_cut_items" :key="index" :item="item">
      <template v-slot:default="{ item }">
        <img :src="item.LinkIcon" class="imgs">
        <span>{{ nameDisplay(item.LinkTitle, 8) }}</span>
      </template>
    </update-short-cut-item>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.short-cut-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #CDFBE4;
  background-color: #ffeba5be;
  border-radius: 10px;
  width: 90px;
  height: 90px;
  margin: 5px;
}
.imgs {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}
</style>