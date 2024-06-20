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

<style scoped>
</style>
