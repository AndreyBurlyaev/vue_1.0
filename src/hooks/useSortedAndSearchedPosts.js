import {ref, computed} from 'vue'

export default function useSortedAndSearchedPosts(posts){
    const searchQuery = ref('')
    const sortedAndSearchedPosts = computed(()=>{
        return posts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLocaleLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedPosts
    }
}
