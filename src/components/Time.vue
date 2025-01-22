<script setup>
import { ref, onMounted } from 'vue';
const prop = defineProps(['color']);
const time = ref("");
function getTime(){
  const date = new Date();
  let hourNow = date.getHours();
  let minuteNow = date.getMinutes();
  if(minuteNow < 10) {
    minuteNow = "0" + String(minuteNow);
  }
  let timeNow = String(hourNow) + ":" + String(minuteNow);
  time.value = timeNow;
}
onMounted(() => {
  getTime();
  setInterval(getTime, 5000);
})
</script>

<template>
  <div class="time" :style="{color: prop.color}">
    <div class="container">
      <div class="time-display">{{ time }}</div>
      <!-- <weather id="weather"></weather> -->
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'comic sans ms';
}

.time{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  background-color: transparent;
  color: #CDFBE4;
}

.time-display{
  user-select: none;
  font-size: 40px;
  transition: all 0.35s;
}

.time-display:hover{
  transform: scale(1.2);
}

.container{
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>