<script>
   export default {
   name: 'my-button'
   }
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
   
<style scoped>
    .btn {
      padding: 10px 15px;
      background: none;
      color: rgb(28, 82, 82);
      border: 3px solid rgb(93, 210, 210);
      border-radius: 12px;
}
</style>
