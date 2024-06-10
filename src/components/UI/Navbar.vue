<script>
     export default {
     }
</script>

<template>
 <div class="navbar">
    <div @click="$router.push('/')">my first VUE</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')" >Посты</my-button>
            <my-button style="margin-left: 20px" @click="$router.push('about')" >инфо о</my-button>
        </div>
</div>
</template>
     
<style scoped>
    .navbar{
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
        }
    .navbar__btns{
        margin-left: auto;
        }
</style>
