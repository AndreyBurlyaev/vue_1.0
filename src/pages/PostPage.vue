<!-- <template>
    <div>
        <div v-if="post">
            <p>{{ post.id }}</p>
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </div>
        <div v-else-if="loading">
            <p>Идёт загрузка...</p>
        </div>
        <div v-else>
                <p>Пост не найден</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        id: {
        type: Number,
        required: true
        }
    },
    data() {
        return {
            post: null,
            loading: false
        }
    },
    async created() {
        await this.fetchPost(this.id);
    },
    methods: {
        async fetchPost(id) {
            try {
                this.loading = true;
                // Проверяем, есть ли пост в хранилище (store)
                this.post = this.$store.state.posts.find(post => post.id === id);
                
                // Если поста нет в хранилище, делаем запрос на сервер
                if (!this.post) {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                    this.post = response.data;
                }
            } catch (error) {
                console.error('Failed to fetch post:', error);
            } finally {
                this.loading = false;
            }
        }
    }
    // ['id', 'post'],
}
</script>

<style scoped>
</style> -->


<template>
    <div>
        <p>{{ post.id }}</p>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
export default {
    props: ['id', 'post'],
}
</script>

<style scoped></style>
