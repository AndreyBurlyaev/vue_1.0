<script>
     export default {
     }
</script>

<template>
 <div class="navbar">
    <div @click="$router.push('/')">my first VUE</div>
    <div class="navbar__btns">
        <my-button @click="$router.push('/about')" >инфо о</my-button>
        <my-button @click="$router.push('/composition')" >Composition</my-button>
    </div>
</div>
</template>

<style scoped>
    .navbar{
        height: 50px;
        background-color: rgb(228, 163, 234);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
            0 1px 3px rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;
        padding: 0 15px;
        justify-content: space-between;
    }
    .navbar__btns{
        display: flex;
        gap: 10px; 
    }
</style>
