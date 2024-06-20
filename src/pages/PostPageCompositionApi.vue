<script>
import axios from 'axios'
import { ref } from 'vue'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyButton from '@/components/UI/MyButton'
import MySelect from '@/components/UI/MySelect'
import MyInput from '@/components/UI/MyInput'
import MyDialog from '@/components/UI/MyDialog'
import { usePosts } from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
import useRemovePost from '@/hooks/useRemovePost'
import useCreatePost from '@/hooks/useCreatePost'

export default {
    components: {
        PostForm, PostList, MyButton, MyInput, MySelect, MyDialog
    },
   
    setup() {
        const { posts, totalPages, isPostsLoading, loadMorePosts } = usePosts();
        const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(posts)
        const { selectedSort, sortOptions, sortedPosts } = useSortedPosts(sortedAndSearchedPosts)
       
        const { post, removePost } = useRemovePost(posts)
        const { dialogVisible, showDialog, createPost } = useCreatePost(posts)
           
        return {
            posts, totalPages, isPostsLoading, loadMorePosts,
            sortedPosts, sortOptions, selectedSort,
            searchQuery, sortedAndSearchedPosts,
            post, removePost, 
            createPost, showDialog, dialogVisible
        }
    }
}
</script>

<template>
    <div class="divMain">
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Ищееемммм..." v-focus />
        <div class="app__btns">
            <my-button class='hover-button' @click="showDialog">Создать пост</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form
                 @create="createPost"
            />
        </my-dialog>

        <post-list 
            :posts="sortedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        /> 

        <div v-else>Идёт загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
</template>

<style>
    .divMain{
        display: grid;
        grid-template-columns: 1fr;
        gap: 25px; 
    }

    .app__btns {
        display: flex;
        justify-content: space-between;
    }

    .hover-button {
        background-color:white; 
        color: black;
        padding: 10px 20px;
        border: 2px solid  rgb(93, 210, 210);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .hover-button:hover {
        background-color: rgb(177, 234, 234);
    }
    .page {
        border: 1px solid black;
        padding: 10px;
    }
    .current-page {
        border: 2px solid rgb(0, 255, 110);
    }
    .observer {
        height: 30px;
        background: white;
    }
</style>

