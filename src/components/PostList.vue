<script>
import PostItem from '@/components/PostItem'  
export default {
    components: {PostItem},
        props:{
            posts: {
                type: Array,
                required: true
            }
        },
        methods: {
            handleRemovePost(postId) {
                this.$emit('remove', postId);
            }
        }
    }
</script>

<template>
    <div v-if="posts.length > 0" class="mainDiv">
        <h3>Список постов</h3>
        <transition-group name="post-list" tag="div" class="post-list">
            <post-item 
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="handleRemovePost"
                
            />
        </transition-group>
    </div>
    <h2 v-else style="color: red;">
        Список постов пуст
    </h2>
</template>
    
<style scoped>
    .mainDiv, .post-list  {
        display: grid;
        grid-template-columns: 1fr;
        gap: 7px; 
    }

    .post{
        padding: 15px;
        border: 2px solid rgb(93, 210, 210);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 12px;
    }

    .post__btns{
        display: flex;
    }

    .post-list-enter-active,
    .post-list-leave-active{
        transition: all 0.4s ease;
    }

    .post-list-enter-from,
    .post-list-leave-to{
        opacity: 0;
        transform: translateX(130px);
    }

    .post-list-move{
        transition: transform 0.8s ease;
    }
</style> 
