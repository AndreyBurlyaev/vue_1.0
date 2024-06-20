import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import About from '@/pages/About'
import PostPage from '@/pages/PostPage'
import PostPageCompositionApi from '@/pages/PostPageCompositionApi'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: PostPage,
        props: route => ({ id: route.params.id, post: JSON.parse(route.query.post) })
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;
