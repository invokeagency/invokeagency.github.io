import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Stories from '../views/Stories.vue'
import Story from '../views/Story.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Expertise from '../views/Expertise.vue'
import Team from '../views/Team.vue'
import About from '../views/About.vue'
import Thanks from '../views/Thanks.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // Wait slightly longer than the transition duration (300ms)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' }); // Optional: add smooth scroll
        }, 350); // Delay slightly longer than transition
      });
    }
  }
})

export default router 