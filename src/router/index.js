import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history', // url #해쉬를 없앰
  routes: [{
      path: '/',
      redirect: '/news', // 8080서버에서 바로 감
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    }, {
      path: '/item',
      component: ItemView,
    },
  ]
});