import Home from './components/Home.vue';
import Contacts from './components/Contacts.vue';
import About from './components/About.vue';
import Bots from './components/Bots.vue';
import Sites from './components/Sites.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/contacts', component: Contacts },
    { path: '/about', component: About },
    { path: '/bots', component: Bots },
    { path: '/sites', component: Sites },
];

export default routes;