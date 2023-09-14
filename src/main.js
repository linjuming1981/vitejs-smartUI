import { createApp } from 'vue';
import App from './App.vue';
import routers from './routers.js';
import('@/api/interception.js');

const app = createApp(App);
app.use(routers);

app.mount('#app');
