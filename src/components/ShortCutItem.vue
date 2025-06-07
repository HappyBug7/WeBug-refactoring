<script setup>
  const prop = defineProps(['item_name', 'img_url', 'max_len', 'font_color', 'dest']);
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
  <a :href="prop.dest" :title="prop.item_name" class="short-cut">
    <div class="container">
      <div class="short-cut-item">
        <img :src="img_url" class="imgs"/>
      </div>
    </div>
    <span class="short-cut-name" :style="{color: prop.font_color}">{{ name }}</span>
  </a>
</template>


<style scoped>
.short-cut {
  text-decoration: none;
  transition: all 0.2s;
  margin: 0;
  width: 90px;
  height: 90px;
}

.container {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 14px 1px rgba(00,00,00,0.2);
  background-color: #cdfbe4a5;
  border-radius: 10px;
}

.short-cut-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.short-cut-item:hover {
  transform: scale(1.2);
  width: 99px;
}

.short-cut-item:hover > div {
  box-shadow: none;
  transition: all 0.5s;
}

.imgs {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.short-cut-name {
  font-size: 13px;
}
</style>
