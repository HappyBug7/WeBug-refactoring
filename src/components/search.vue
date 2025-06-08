<script setup>
import { ref, Transition } from 'vue';
import axios from 'axios';

const prop = defineProps(['search_color', 'search_foucs_bg_color']);

const filterState = ref('none');
const filter = ref('blur(5px)');
const suggestState = ref('none');
const index = ref(10);
const q = ref('');
const last = ref('undefined');
const suggestion = ref('');
const focus = ref(-1);
const isMouseOver = ref(false);
const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
})

function blurFunction() {
  filterState.value = "none";
  suggestState.value = "none";
  filter.value = "blur(5px)";
  index.value = 10;
}

function searchFnuction(){
  if (focus.value == -1) {
    window.location.href="https://cn.bing.com/search?q=" + q.value;
  } else {
    window.location.href="https://cn.bing.com/search?q=" + suggestion.value[focus.value];
  }
}
function focusFunction(){
  filterState.value="block";
  suggestState.value = "flex";
  filter.value = "none";
  index.value = 100;
  updateSuggestion();
}

function autoCompelete() {
  updateSuggestion();
}

function updateSuggestion() {
  if (q.value != last.value) {
    var url = "/search?q="+q.value;
    axios_instance.get(url)
    .then(res => {
      suggestion.value = res.data.data.Data;
      focus.value = -1;
    })
    .catch(err => console.log(err));
    last.value = q.value;
  }
}
</script>

<template>
  <div class="search-container">
    <div class="back-blur" :style="{display:filterState}" @click="blurFunction"></div>
    <div class="search-area" :style="{zIndex:index}">
      <div class="search-box" :style="{zIndex:index, backdropFilter:filter, transform: (isMouseOver || filterState != 'none') ? 'scale(1)' : 'scale(0.95)'}" @mouseover="isMouseOver = true" @mouseleave="isMouseOver = false">
        <button class="search-button" @click="searchFnuction">
          <i class='bx bx-search search-icon'></i>
        </button>
        <input type="text" class="search-main" @focus="focusFunction" v-model="q" :style="{zIndex:index}" @keyup.enter="searchFnuction" ref="SearchInput" @input="autoCompelete"  @keydown.up="focus == -1 ? focus = focus :focus--" @keydown.down="focus == suggestion.length-1 ? focus = focus : focus++">
      </div>
      <div class="suggestion-container" :style="{display:suggestState, zIndex:index}">
        <div class="suggestion-item" v-for="(item, index) in suggestion" :key="item" :style="{backgroundColor: index === focus ? prop.search_foucs_bg_color : 'transparent', color : prop.search_color}" @mouseover="focus = index" @mouseleave="focus = -1" @click="searchFnuction">
          <div v-if="q == item.substring(0, q.length)">
            {{ q }}<b class="suggest-b">{{item.substring(q.length)}}</b>
          </div>
          <div v-if="q != item.substring(0, q.length)">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<style scoped>

.search-container {
  position: relative;
  margin: 20px;
}

.back-blur {
  display: none;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  backdrop-filter: blur(5px);
  z-index: 20;
}

.search-area {
  background-attachment:scroll;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
}

.search-box {
  width: 400px;
  height: 40px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row-reverse;
  transition: 0.5s;
}

.search-button {
  border-style: none;
  background-color: transparent;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  color: white;
}

.search-button:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
}

.search-main {
  width: 325px;
  height: 30px;
  background-color: transparent;
  border-style: none;
  outline: none;
}

.suggestion-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  backdrop-filter: blur(10px);
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.suggestion-item {
  width: 400px;
  height: 30px;
  background-color: transparent;
  padding-left: 6px;
}

.suggestion-item:hover {
  cursor: pointer;
}

.suggest-b {
  font-weight: bold;
}
</style>