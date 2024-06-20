<script>
   export default {
   name: 'my-button',
   inheritAttrs: false
   }
</script>

<template>
  <button v-bind='$attrs' class="btn">
    <slot></slot>
  </button>
</template>
   
<style>
  .btn {
    padding: 10px 15px;
    background: none;
    color: black;
    border: 3px solid rgb(93, 210, 210);
    border-radius: 12px;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: rgb(177, 234, 234);
  }
</style>
