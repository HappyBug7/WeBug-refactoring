<script setup>
import { ref } from 'vue';
import axios from 'axios';
const filterState = ref('none');
const filter = ref('blur(5px)');
const suggestState = ref('none');
const index = ref(10);
const q = ref('');
const suggestion = ref('');
const focus = ref(-1);
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
  if (focus == -1) {
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
  var url = "/search?q="+q.value;
  axios_instance.get(url)
  .then(res => {
    suggestion.value = res.data.data.Data;
    focus.value = -1;
  })
  .catch(err => console.log(err));
}
</script>

<template>
  <div class="search-container">
    <div class="back-blur" :style="{display:filterState}" @click="blurFunction"></div>
    <div class="search-area" :style="{zIndex:index}">
      <div class="search-box" :style="{zIndex:index,backdropFilter:filter}">
        <button class="search-button" @click="searchFnuction">
          <i class='bx bx-search' id="searchIcon"></i>
        </button>
        <input type="text" class="search-main" @focus="focusFunction" v-model="q" :style="{zIndex:index}" @keyup.enter="searchFnuction" ref="SearchInput" @input="autoCompelete"  @keydown.up="focus == -1 ? focus = focus :focus--" @keydown.down="focus++">
      </div>
      <div class="suggestion-container" :style="{display:suggestState, zIndex:index}">
        <div class="suggestion-item" v-for="(item, index) in suggestion" :key="item" :style="{color: index === focus ? 'red' : 'black'}" @mouseover="focus = index" @mouseleave="focus = -1">
          {{item}}
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
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
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
}

.suggestion-item {
  width: 400px;
  height: 30px;
  background-color: transparent;
}

.suggestion-item:hover {
  transform: scale(1.1) translateX(20px);
  transition: all 0.15s;
  cursor: pointer;
}
</style>