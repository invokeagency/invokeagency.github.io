import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Stories from '../views/Stories.vue'
import Story from '../views/Story.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Expertise from '../views/Expertise.vue'
import Team from '../views/Team.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/stories',
      name: 'stories',
      component: Stories
    },
    {
      path: '/stories/:id',
      name: 'story',
      component: Story
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/expertise',
      name: 'expertise',
      component: Expertise
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router 