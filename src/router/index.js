import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import bus from '../utiles/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history', // url #해쉬를 없앰
  routes: [{
      path: '/',
      redirect: '/news', // 8080서버에서 바로 감
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        // setTimeout(() => {
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            next();
          })
          .catch((error) => console.log(error));
         // }, 1000);
        // console.log('to', to);
        // console.log('from', from);
        // console.log('next', next);
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    }, 
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});