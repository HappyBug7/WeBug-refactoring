<script setup>
  const prop = defineProps(['name', 'img_url', 'max_len']);
  
  function nameDisplay() {
    let length = 0;
    while (length < prop.max_len) {
      const pattern = /[\u4e00-\u9fa5]/g;
      const replacedStr = str.replace(pattern, 'aa');
      length += 
    }
  }
</script>


<template>

</template>


<style scoped>

</style>
