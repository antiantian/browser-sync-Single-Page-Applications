import Vue      from 'vue'
import Router   from 'vue-router'
import Home     from './../pages/Home.vue'
import Act     from './../pages/Act.vue'
import NewDetails from './../components/pageINNER/indexw.vue'
import NotFoundComponent  from './../components/pageINNER/error.vue'
Vue.use(Router)

let routes = [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/act',
      name: 'Act',
      component: Act
    },
    {
       path: '/firestart/newDetails',
       name: 'newDetails',
        component:NewDetails
    },
    {
       path: '/firestart/newDetails/:id',
        component: NewDetails
    },
    { 
      path: '*', 
      component: NotFoundComponent }
  ]


const router = new Router({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    }
})
export default router;
