import Vue from 'vue'
import Router from 'vue-router'
let Home = resolve => require(['@/pages/Home'], resolve)
let Frameworks = resolve => require(['@/pages/Frameworks'], resolve)
let Whouse = resolve => require(['@/pages/Whouse'], resolve)
let Subjects = resolve => require(['@/pages/Subjects'], resolve)
let Information = resolve => require(['@/pages/Information'], resolve)
let Releasesnews = resolve => require(['@/pages/Releasesnews'], resolve)
let Rank = resolve => require(['@/pages/Rank'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: 'frameworks',
        name: 'Frameworks',
        component: Frameworks
      }, {
        path: 'whouse',
        name: 'Whouse',
        component: Whouse
      }, {
        path: 'subjects',
        name: 'Subjects',
        component: Subjects
      }, {
        path: 'information',
        name: 'Information',
        component: Information
      }, {
        path: 'releasesnews',
        name: 'Releasesnews',
        component: Releasesnews
      }, {
        path: 'rank',
        name: 'Rank',
        component: Rank
      }]
    }
  ]
})
