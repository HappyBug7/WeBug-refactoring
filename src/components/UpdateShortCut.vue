<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ShortCutItem from './ShortCutItem.vue';
const prop = defineProps(['short_cut_items']);
</script>

<template>
  <div class="container">
    <short-cut-item class="short-cut-item" v-for="(item, index) in prop.short_cut_items"
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