<script setup>
import { ref, onMounted } from 'vue';
const prop = defineProps(['view', 'classes_today', 'classes']);
const time = [{
        12:"8:00-9:50",
        34:"10:10-12:00",
        56:"14:00-15:50",
        78:"16:10-18:00",
        910:"19:10-21:00"
      },{
        12:"8:00-9:50",
        34:"10:10-12:00",
        56:"14:30-16:20",
        78:"16:40-18:30",
        910:"19:40-21:30"
      }];
const Time = ref([12, 34, 56, 78, 910]);
onMounted(() => {
  console.log(prop.classes_today);
  console.log(prop.classes);
})
</script>

<template>
  <div v-if="prop.view" class="container">
    <div v-for="(item, index) in prop.classes_today" :key="index">
      <div class="flex_row">
        <div class="flex_column left">
          <div>{{ time[0][item.class] }}</div>
          <div>{{ item.duration }}</div>
        </div>
        <div class="flex_column right">
          <div>{{ item.name }}</div>
          <div>{{ item.place }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <div class="flex_row">
      <div class="flex_column">
        <div v-for="(item, index) in Time" :key="index" class="time">
          <div>{{ time[0][item] }}</div>
        </div>
      </div>
      <div v-for="(day, index) in prop.classes" :key="index" class="flex_column">
        <div v-for="(_class, index) in day" :key="index" class="flex_column simp_class">
          <div>{{ _class.name }}</div>
          <div>{{ _class.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.flex_row{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex_column{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left{
  color: #4B4737;
  width: 100px;
  background-color: #ffeba5be;
  border-radius: 10px;
  margin: 3px;
}
.right{
  color: #4B4737;
  width: 200px;
  background-color: #fef3cabe;
  border-radius: 10px;
  margin: 3px;
}
.simp_class{
  width: 120px;
  height: 62px;
  background-color: #fef3cabe;
  border-radius: 10px;
  margin: 3px;
  color: #4B4737;
  
}
.simp_class div {
  margin: auto;
}
.time{
  width: 100px;
  height: 62px;
  background-color: #ffeba5be;
  color: #4B4737;
  border-radius: 10px;
  margin: 3px;
  display: flex;
}
.time div{
  margin: auto;
}
</style>