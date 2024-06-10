<script>
   export default {
    props:{
        post:{
            type: Object,
            required: true
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

    .post__btns{
        display: flex;
}
</style>
