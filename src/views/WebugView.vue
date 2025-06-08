<script setup>
import Time from '@/components/Time.vue';
import ToolBar from '@/components/ToolBar.vue';
import Search from '@/components/Search.vue';
import WebShortCut from '@/components/WebShortCut.vue';
import UpdateShortCut from '@/components/UpdateShortCut.vue';
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';
import AddShortCut from '@/components/AddShortCut.vue';
import Schedule from '@/components/Schedule.vue';
const prop = defineProps(['bg_image']);
const size = 50;
const short_cut_items = ref([]);
const classes_today = ref([]);
const classes = ref([]);
const Day = ref(0);
const time = [12,34,56,78,910];

const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
});

const elements = computed(() => [
  {
    icon: 'bx bxs-plane-take-off',
    icon_color: '#1B9B74',
    use_switch: true,
    slot_width_1: 300,
    slot_width_2: 400,
    component_state_1: AddShortCut,
    component_state_2: UpdateShortCut,
    component_props_1: {},
    component_props_2: {short_cut_items: short_cut_items.value},
  },
  {
    icon: 'bx bxs-book-bookmark',
    icon_color: '#1B6983',
    use_switch: true,
    slot_width_1: 300,
    slot_width_2: 980,
    component_state_1: Schedule,
    component_state_2: Schedule,
    component_props_1: {view: true, classes_today: classes_today.value, classes: classes.value},
    component_props_2: {view: false, classes_today: classes_today.value, classes: classes.value},
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

function getClasses() {
  let now = new Date();
  // Day.value = now.getDay();
  Day.value = 1;
  axios_instance.get('/class?day='+Day.value)
  .then(res => {
    classes_today.value = res.data.data
    console.log(classes_today.value);
  })
  .catch(err => console.log(err))

  for(let i = 0; i < 7; i++){
    let data_temp = []
    for(let j = 0; j < 5; j++){
      axios_instance.get('/classes?day='+(i+1)+'&time='+time[j])
      .then(res => {
        data_temp.push(res.data.data)
      })
      .catch(err => console.log(err))
    }
    classes.value.push(data_temp)
  }
  console.log(classes.value);
}

onMounted(() => {
  getShortCutItems();
  getClasses();
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
