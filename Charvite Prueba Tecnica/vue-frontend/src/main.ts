import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-3-socket.io'

const options = {
  debug: true, // Enable debug mode
  connection: SocketIO("http://localhost:3000"), 
};

console.log('Creating Vue app...');

const app = createApp(App)
  .use(router)
  .use(new VueSocketIO(options))  

// Listen for the connect event
app.config.globalProperties.$socket.on('connect', () => {
  console.log('Connected to the backend.');
});

console.log('Mounting app...');

app.mount('#app');

console.log('App mounted.');
