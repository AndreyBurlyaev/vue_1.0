import { ref } from 'vue'

export default function useRemovePost(posts) {
    const post = ref(null);
    const removePost = (postId) => {
        posts.value = posts.value.filter(p => p.id !== postId)
    };

    return {
        post,
        removePost
    }
}
