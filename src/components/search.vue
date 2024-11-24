<script setup>
import { ref } from 'vue';
const filterState = ref('none');
const index = ref(10);
const filter = ref('blur(5px)');
const suggestState = ref(false);
const q = ref('');
function blurFunction() {
  filterState.value = "none";
  index.value = 10;
  filter.value = "blur(5px)";
  suggestState.value = false;
}

function searchFnuction(){
  window.location.href="https://cn.bing.com/search?q=" + q.value;
}
function focusFunction(){
  filterState.value="block"
  index.value = 100
  filter.value = "none"
  // if(this.q != ""){
  //   var url = "/api/search?q="+this.q
  //   axios.get(url)
  //   .then(res => {
  //     s_data = res.data.data.Data
  //   })
  //   .catch(err => console.log(err))
  // }
  suggestState.value = true
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
        <input type="text" class="search-main" @focus="focusFunction" v-model="q" :style="{zIndex:index}" @keyup.enter="searchFnuction" ref="SearchInput">
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
</style>