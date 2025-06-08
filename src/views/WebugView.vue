<script setup>
import Time from '@/components/Time.vue';
import ToolBar from '@/components/ToolBar.vue';
import Search from '@/components/Search.vue';
import WebShortCut from '@/components/WebShortCut.vue';
import ShortCutItem from '@/components/ShortCutItem.vue';
import UpdateShortCut from '@/components/UpdateShortCut.vue';
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import AddShortCut from '@/components/AddShortCut.vue';
const prop = defineProps(['bg_image']);
const size = 50;
const short_cut_items = ref([]);

const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
});

const elements = computed(() => [
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width_1: 200,
    slot_width_2: 200,
    component_state_1: Time,
    component_state_2: Time,
    component_props_1: {color: '#CDFBE4'},
    component_props_2: {color: 'red'}
  },
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width_1: 200,
    slot_width_2: 200,
    component_state_1: Time,
    component_state_2: ShortCutItem,
    component_props_1: {color: '#CDFBE4'},
    component_props_2: {item_name: 'testing', img_url: '/slime.gif', max_len: 8, font_color: '#CDFBE4', dest: 'http://happybug.fun'}
  },
  {
    icon: 'bx bx-x',
    icon_color: '#CDFBE4',
    use_switch: true,
    slot_width_1: 300,
    slot_width_2: 1000,
    component_state_1: AddShortCut,
    component_state_2: UpdateShortCut,
    component_props_1: {},
    component_props_2: {short_cut_items: short_cut_items.value},
  }
]);

function getShortCutItems() {
  var url = "/shortcuts";
  axios_instance.get(url)
  .then(res => {
    short_cut_items.value = res.data.data;
  })
  .catch(err => console.log(err));
}

onMounted(() => {
  getShortCutItems();
})

</script>

<template>
  <div class="webug-container" :style="{backgroundImage: `url(${bg_image})`}">
    <Time class="webug-time" :color='`#CDFBE4`'></Time>
    <tool-bar :components="elements" :size="size"></tool-bar>
    <Search class="webug-search" :search_color='`#c4f3c4`' :search_foucs_bg_color="`#86ffc264`"></Search>
    <web-short-cut :items="short_cut_items"></web-short-cut>
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

.webug-time {
  position: absolute;
  top: 20%
}

.webug-search {
  position: absolute;
  top: 30%;
}
</style>
