<script setup>
import { ref } from 'vue';
import axios from 'axios';
const prop = defineProps(['item']);
const display = ref(false);
const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
});

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

function removeShortCut() {
  const url = `/shortcut?link=${encodeURIComponent(prop.item.LinkOri)}`;
  axios_instance.delete(url)
    .then(res => {
      console.log('Shortcut removed:', res.data);
    })
    .catch(err => console.error('Error removing shortcut:', err));
  window.location.reload();
}
</script>

<template>
  <div class="short-cut-item" @mouseover="display = true" @mouseleave="display = false">
    <img :src="prop.item.LinkIcon" class="imgs">
    <span>{{ nameDisplay(prop.item.LinkTitle, 8) }}</span>
    <div v-if="display" class="filter">
      <button class="btns" @click="removeShortCut">remove</button>
    </div>
  </div>
</template>

<style scoped>
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
.filter{
  position: absolute;
  background-color: #7d7864be;
  width: 90px;
  height: 90px;
  display: flex;
  align-content: center;
  justify-self: center;
  border-radius: 10px;
  flex-direction: column;
}
.btns {
  border-radius: 5px;
  border-style: none;
  padding: 5px;
  background-color: #ffd334be;
  height: 35px;
  color: #CDFBE4;
  box-shadow: 0 0 14px 1px rgba(00,00,00,0.2);
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 5px;
  margin-right: 5px;
}
</style>