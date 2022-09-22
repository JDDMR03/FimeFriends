import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "../components/home.vue"
import Feed from "../components/feed.vue"
import Post from "../components/post.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/feed', component:  Feed},
  { path: '/post', component: Post},
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})