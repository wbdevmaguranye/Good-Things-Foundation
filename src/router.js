import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';


Vue.use(Router);

export default new Router({
  routes: [
    
    {
      path: 'pages/hello',
      name: 'helloWorld',
      component: HelloWorld,
    },
   
    // ... other routes
  ],
});
