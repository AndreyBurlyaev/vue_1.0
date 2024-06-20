import {computed, ref} from 'vue'

export default function useSortedPosts(sortedAndSearchedPosts){
    const selectedSort = ref('')
    const sortOptions =
        [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'},
            ]
   

   const sortedPosts = computed(()=>{
    return[...sortedAndSearchedPosts.value].sort((a, b) => a[selectedSort.value]?.localeCompare(b[selectedSort.value]))
    })

    return {
        selectedSort, sortOptions, sortedPosts
    }
}
