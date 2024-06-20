<script>
   export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    },
    methods: {
        openPost(post) {
            this.$router.push({ name: 'Post', params: { id: post.id }, query: { post: JSON.stringify(post) } })
        }
    }
   }
</script>

<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>

        <div class="post__btns">
            <my-button
                @click="$router.push(`/posts/${post.id}`)"
                >Открыть
            </my-button>

            <my-button
                @click="$emit('remove', post)"
                >Удалить
            </my-button>
        </div>
    </div>
</template>
   
<style scoped>
    .post {
        padding: 15px;
        border: 2px solid rgb(93, 210, 210);
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 12px;
}
</style>

 <!-- <template>
    <div class="post">
        <div>
            <div>{{ post.id }} </div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button class='hover-button'  @click="openPost(post)">Открыть</my-button>
            <my-button class='hover-button'  @click="$emit('remove', post.id)">Удалить</my-button>
        </div>
    </div>
</template>  -->

 <!-- <style>
    .post {
        background-color: white; 
        color: black; 
        padding: 15px;
        border: 2px solid rgb(93, 210, 210);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 12px;
    }
    .post__btns{
        display: flex;
        gap: 10px
    }
</> -->
