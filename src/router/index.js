import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import GalleryPage from '../views/GalleryPage.vue';
import ViewPage from '../views/ViewPage.vue';
import MintPage from '../views/MintPage.vue';
import MyTokens from '../views/MyTokens.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  },
  {
    path: '/view/',
    name: 'View',
    component: ViewPage,
  },
  {
    path: '/mint',
    name: 'Mint',
    component: MintPage
  },
  {
    path: '/my-tokens',
    name: 'My Tokens',
    component: MyTokens
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
