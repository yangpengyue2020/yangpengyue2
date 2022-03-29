import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect:"/2-1",
    component: HomeView,
    children:[
      {
        path:"2-1",
        name:"list",
        component:() =>import( "../views/home/List.vue"),
      },
      {
        path:"2-2",
        name:"other",
        component:() =>import( "../views/home/Other.vue"),
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  
];

const router = new VueRouter({
  routes,
});





export default router;
