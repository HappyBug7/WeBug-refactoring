<script setup>
import { ref } from 'vue';
import axios from 'axios';
const url = ref('');
const name = ref('');
const axios_instance = axios.create({
  baseURL: '/api',
  timeout: 3000
});

function submitFunc() {
  const shortcut = {
    Link: url.value,
    Title: name.value,
  }
  axios_instance.post('/shortcut_add', shortcut)
  .catch(err => console.log(err))
  alert('Shortcut added successfully')
}
</script>

<template>
  <div class="input-div">
    <input type="text" placeholder="Enter the URL" class="input-basic" v-model="url">
    <input type="text" placeholder="Enter the name" class="input-basic" v-model="name">
    <button class="submit-button" @click="submitFunc">Add</button>
  </div>
</template>

<style scoped>
  .input-div{
    width: 300px;
    height: 180px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .input-basic {
    margin: 5px;
    border-radius: 5px;
    border-style: none;
    height: 60px;
    padding: 5px;    
    background-color: #ffeba5be;
  }

  .submit-button{
    margin: 5px;
    border-radius: 5px;
    border-style: none;
    height: 60px;
    padding: 5px;
    background-color: #ffd334be;
    color: #CDFBE4;
    box-shadow: 0 0 14px 1px rgba(00,00,00,0.2);
  }

  .submit-button:hover{
    color: #2f61ea;
    cursor: pointer;
  }
</style>