<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ShortCutItem from './ShortCutItem.vue';

const prop = defineProps([]);
const items = ref();
const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
})


function getShortCutItems() {
  var url = "/shortcuts";
  axios_instance.get(url)
  .then(res => {
    items.value = res.data.data;
  })
  .catch(err => console.log(err));
}

onMounted(() => {
  getShortCutItems();
})
</script>


<template>
  <div class="container">
    <short-cut-item class="short-cut-item" v-for="(item, index) in items"
      :key="index"
      :img_url="item.LinkIcon"
      :dest="item.LinkOri"
      :item_name="item.LinkTitle"
      :max_len="8"
      :font_color="`#CDFBE4`">
    </short-cut-item>
  </div>  
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


</style>