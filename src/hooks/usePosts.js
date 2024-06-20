import axios from 'axios'
import {onMounted, ref} from 'vue'

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const currentPage = ref(1)
    const isPostsLoading = ref(true)


    const fetchPosts = async (page) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: page,
                _limit: limit
            }
        });
        totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
        return response.data
    }

    const fetching = async () => {
        try {
            posts.value = await fetchPosts(currentPage.value)
        } catch (e) {
            alert('ошибка!')
        } finally {
            isPostsLoading.value = false
        }
    }

    const loadMorePosts = async () => {
        try {
            currentPage.value++
            const newPosts = await fetchPosts(currentPage.value)
            posts.value = [...posts.value, ...newPosts]
        } catch (e) {
            console.log(e);
        }
    }

    onMounted(fetching)
    return {
        posts, isPostsLoading, totalPages, loadMorePosts
    }  
}
