import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import routers from './routers.js';

const app = createApp(App);
app.use(routers);

createApp(App).mount('#app');
