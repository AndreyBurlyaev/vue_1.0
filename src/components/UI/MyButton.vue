<template>
  <button class="btn">
<slot></slot>

  </button>
</template>
   
   
   <script>
   export default {
   name: 'my-button'
   }
   
   </script>
   
   
   <style scoped>
    .btn {
    /* margin-top: 15px;
    margin-top: 15px; */
    padding: 10px 15px;
    background: none;
    color: rgb(28, 82, 82);
    border: 3px solid rgb(93, 210, 210);
    border-radius: 12px;
}
   </style>