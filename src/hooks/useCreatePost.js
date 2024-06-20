import { ref } from 'vue'

export default function useCreatePost(posts) {
    
    const dialogVisible = ref(false);

    const showDialog = () => {
        dialogVisible.value = true;
        }

    const createPost = (post) => {
        posts.value.push(post);
        dialogVisible.value = false;
        }

    return {
        dialogVisible,
        showDialog,
        createPost
    };
}


