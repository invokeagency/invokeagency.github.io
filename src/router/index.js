import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Team from '../views/Team.vue'
import Stories from '../views/Stories.vue'
import Story from '../views/Story.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/stories',
      name: 'stories',
      component: Stories
    },
    {
      path: '/story/:id',
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
    }
  ]
})

export default router 