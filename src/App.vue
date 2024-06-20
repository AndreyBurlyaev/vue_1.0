<script>
   import Navbar from '@/components/UI/Navbar.vue'
   export default {
    components: {
        Navbar
    }
   }
</script>

<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
   
<style>
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
        background: linear-gradient(to right, #ee9ca7, #ffdde1);
        min-height: 100vh;
    }
</style>
   