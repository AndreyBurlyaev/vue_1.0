<script>
    export default {
    data(){
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost(){
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>

        <my-input 
            v-model="post.title" 
            type="text" 
            placeholder="Название"
        />
        <my-input 
            v-model="post.body"
            type="text" 
            placeholder="Описание"
        />
        <my-button class="myButton"
            style=" display: flex; align-self: flex-end;"
            @click="createPost"
        >
        Создать</my-button>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
}
</style>
