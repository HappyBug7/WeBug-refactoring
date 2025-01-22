<script setup>
  const prop = defineProps(['item_name', 'img_url', 'max_len', 'font_color']);
  const name = nameDisplay();
  
  function nameDisplay() {
    let length = 0;
    let idx = 0;
    const pattern = /[\u4e00-\u9fa5]/g;
    for (idx = 0; length < prop.max_len; idx++) {
      if (pattern.test(prop.item_name[idx])) {
        length += 2;
      } else {
        length += 1;
      } 
    }
    return prop.item_name.substring(0, idx) + "...";
  }
</script>


<template>
  <div class="container" :style="{color: prop.font_color}">
    <div class="short-cut-item">
      <img :src="img_url" class="imgs"/>
      <span>{{ name }}</span>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.short-cut-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.imgs {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
</style>
