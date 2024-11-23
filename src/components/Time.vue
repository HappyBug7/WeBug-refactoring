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
  setInterval(getTime, 1000);
})
</script>

<template>
  <div id="time" :style="{color: prop.color}">
    <div id="container">
      <div id="timeDisplay">{{ time }}</div>
      <!-- <weather id="weather"></weather> -->
    </div>
  </div>
</template>

<style scoped>
#time{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  background-color: transparent;
  color: #CDFBE4;
}

#timeDisplay{
  user-select: none;
  font-size: 40px;
  transition: all 0.35s;
}

#timeDisplay:hover{
  transform: scale(1.2);
}

#container{
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>