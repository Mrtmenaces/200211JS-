import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../components/Index.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', 
    routes:[
        {path:"/xxx",redirect:"/"},
        {path:"/",component:Index,name:"Index"},
        {path:"/me/:id",component:() => import('@/components/Me'),name:"Me"},
    ]
})






























